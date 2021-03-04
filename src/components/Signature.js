import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Signature = () => {
  return (
    <View style={styles.adminCont}>
      <View style={styles.adminButton}>
        {/* <Text style={styles.signature}>HA Developers ORG.</Text> */}
        <Text style={styles.signature}>HADO.pk</Text>
      </View>
    </View>
  );
};

export default Signature;

const styles = StyleSheet.create({
  adminButton: {
    marginVertical: 5,
  },
  signature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f0f0f',
    fontStyle: 'italic',
    // fontFamily: 'Lato-Regular',
  },
  adminCont: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    // backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
