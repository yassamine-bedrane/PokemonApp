import React from 'react';
import { Modal, View, Text, Button, StyleSheet, Image } from 'react-native';

const PokemonDetailsPopup = ({ pokemon, visible, onClose }) => {
  if (!pokemon) {
    return null;
  }

  return (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Button title="X" onPress={onClose} />
          <Image style={styles.image} source={{ uri: pokemon.img }} />
          <Text>Name: {pokemon.name}</Text>
          <Text>Type: {pokemon.type.join(', ')}</Text>
          <Text>Height: {pokemon.height}</Text>
          <Text>Weight: {pokemon.weight}</Text>
          <Text>{'\n'}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
});

export default PokemonDetailsPopup;