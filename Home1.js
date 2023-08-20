import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
        
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('OtherPage')}
      >
        <Text style={styles.cardText}>Auditor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('OtherPage1')}
      >
        <Text style={styles.cardText}>Approver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 190,
    backgroundColor: 'white',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#7fb5e9',
  },
});

export default Home1;
