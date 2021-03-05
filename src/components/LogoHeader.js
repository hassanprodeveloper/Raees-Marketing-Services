import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
  } from 'react-native';

const LogoHeader = () => {
    return (
        <>
         <Image source={require('../Assets/logo1.png')} style={styles.logo} />
        <Text style={styles.text}>RAEES MARKETING SERVICES</Text>   
        </>
    );
}

export default LogoHeader;

const styles = StyleSheet.create({
    logo: {
        height: 150,
        width:  150,
        resizeMode: 'cover',
      },
      text: {
        // fontFamily: 'Archino',
        fontSize: 17,
        marginTop: -30,
        marginBottom: 30,
        color: '#051d5f',
      },
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
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
  });
  
