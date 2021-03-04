import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {windowHeight, windowWidth} from '../Assets/Dimensions';

import Icon from 'react-native-vector-icons/Ionicons';

const FormButton = ({buttonTitle, iconType, ...rest}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        {...rest}>
         <Icon name='md-add-circle' size={60} color="#0f0f0f" />
      </TouchableOpacity>
    </>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    flexDirection: 'row',
  },
  buttonText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    // marginHorizontal: 5,
    alignSelf: 'center',
    fontFamily: 'Lato-Regular',
  },
  textCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRightColor: '#ccc',
    // borderRightWidth: 1,
    width: 50,
  },
});
