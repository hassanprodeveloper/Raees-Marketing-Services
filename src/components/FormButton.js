import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {windowHeight, windowWidth} from '../Assets/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormButton = ({buttonTitle, isLoading , iconType, ...rest}) => {
  return (
    <>
      <Button
        style={styles.button}
        loading={isLoading}
        disabled={isLoading}
        mode="contained"
        color="#0172BB"
        // onPress={() => console.log('Pressed')}
        {...rest}
        >
        {buttonTitle}
      </Button>
      {/* <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#fff" />
      </View>

      <View style={styles.textCont}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </View>
      </TouchableOpacity> */}
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
  button: {
    width: '100%',
    marginTop: 10,
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
