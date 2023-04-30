import  { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';

import PokemonDetailsPopup from './components/PokemonDetailsPopup';
import PokemonList from './components/PokemonList';
import PokemonCard from './components/PokemonCard';

const groupPokemonByType = (pokemonData) => {
  const groupedData = {};
  pokemonData.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      if (!groupedData[type]) {
        groupedData[type] = [];
      }
      groupedData[type].push(pokemon);
    });
  });
  return groupedData;
};

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
        const data = await response.json();
        setPokemonList(data.pokemon);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleModalClose = () => {
    setSelectedPokemon(null);
  };

  const renderModal = () => {
    return (
      <Modal visible={selectedPokemon !== null} transparent>
        <View style={styles.modal}>
          {selectedPokemon !== null && <PokemonDetailsPopup pokemon={selectedPokemon} onClose={handleModalClose} />}
        </View>
      </Modal>
    );
  };

  const renderPokemonCard = ({ item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedPokemon(item);
        }}
        
      >
        <PokemonCard pokemon={item} />
      </TouchableOpacity>
    );
  };

  const renderPokemonSection = ({ item }) => {
    return (
      <View>
        <Text style={styles.sectionHeader}>{item.title}</Text>
        <View style={styles.section}>
          <FlatList
            data={item.data}
            keyExtractor={(item) => item.num}
            renderItem={renderPokemonCard}
            numColumns={2}
            scrollEnabled={false}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderModal()}
      <View style={styles.pokemonListContainer}>
        {pokemonList && (
          <FlatList
            data={Object.keys(groupPokemonByType(pokemonList)).map((type) => ({
              title: type,
              data: groupPokemonByType(pokemonList)[type],
            }))}
            keyExtractor={(item) => item.title}
            renderItem={renderPokemonSection}
            scrollEnabled={true}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  pokemonListContainer: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize',
  }
});

export default App;