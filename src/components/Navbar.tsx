import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1a191b',
    paddingBottom: 10,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});
