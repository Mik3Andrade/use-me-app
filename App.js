import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textTitle}> Seja bem vindo ao meu App (;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#6959CD',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
});
