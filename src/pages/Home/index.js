import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textTitle}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#Edd33F',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
  },
});
