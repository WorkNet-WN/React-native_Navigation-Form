import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtherPage1 = () => {
  return (
    <View style={styles.container}>
      <Text>This is Other Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtherPage1;
