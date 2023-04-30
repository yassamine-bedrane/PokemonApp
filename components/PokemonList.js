// PokemonList.js
import React from 'react';
import { FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = ({ data, onPress }) => {
  const renderItem = ({ item }) => (
    <PokemonCard pokemon={item} onPress={() => onPress(item)} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
    />
  );
};

export default PokemonList;
