import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Surface} from 'react-native-paper';

const DashbordCard = ( {title, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <Surface style={styles.surface}>
        <Text style={styles.surfaceTitle}>{title}</Text>
      </Surface>
    </TouchableOpacity>
  );
};

export default DashbordCard;

// Styling Starts from here
const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 8,
  },
  surfaceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginVertical: 10,
    paddingVertical: 10,
  },
  surfaceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f0f0f',
    textTransform: 'capitalize',
  },
});
