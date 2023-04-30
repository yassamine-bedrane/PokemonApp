// PokemonCard.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PokemonCard = ({ pokemon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: pokemon.img }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.number}>#{pokemon.num}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  infoContainer: {
    height: '30%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  number: {
    color: '#a0a0a0',
    fontSize: 14,
  },
});

export default PokemonCard;
