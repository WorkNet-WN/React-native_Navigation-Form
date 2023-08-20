import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtherPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lefts}>Bradley Robin (TSM)</Text>
      <Text></Text>
      <View style={styles.row}>
        <View style={[styles.card, styles.cardWithMargin]}>
          <Text style={styles.cardText}>New Audit</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Drafts {'\n'} (03)</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.card, styles.cardWithMargin]}>
          <Text style={styles.cardText}>Pending Approval {'\n'}(05)</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Approval {'\n'}(03)</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.card, styles.cardWithMargin]}>
          <Text style={styles.cardText}>Rejected {'\n'}(02)</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Reports</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
     alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: 140, // Increase card width
    height: 150, // Increase card height
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  cardWithMargin: {
    marginRight: 20, // Add margin to the right side
  },
  lefts:{
    fontSize: 24,
    fontWeight: 'bold',
    color:'#41469e',
    
    marginLeft:'-38'
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'#63a5e4',

    textAlign: 'center',
    flexWrap: 'wrap',
    aspectRatio:'9:16'
    
  },
});

export default OtherPage;
