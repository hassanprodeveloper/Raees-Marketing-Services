import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Signature from '../components/Signature';
import LogoHeader from '../components/LogoHeader';
import {TextLoader, DotsLoader} from 'react-native-indicator';
import {CurrentUser} from '../Config/AppAuth';
import {connect} from 'react-redux';
import {updateUser1} from '../redux/action';
const SplashScreen = ({navigation}) => {
  const [isLoginCondition, setisLoginCondition] = useState(null);
  useEffect(() => {
    setisLoginCondition(CurrentUser());
  });
  setTimeout(() => {
    if (isLoginCondition) {
      console.log('working');
    } else {
      navigation.replace('LoginScreen');
    }
  }, 2000);
  return (
    <>
      <View style={styles.container}>
        {/* <Image source={require('../Assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>RAEES MARKETING SERVICES</Text> */}
        <LogoHeader />
        <DotsLoader color="#0f0f0f" />
        {/* <TextLoader text="Loading" /> */}
      </View>
      <Signature />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData.name,
  // user2: state.r2.user,
});
const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => dispatch(updateUser1(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
  },
  // logo: {
  //   height: 150,
  //   width: 150,
  //   resizeMode: 'cover',
  // },
  // text: {
  //   fontFamily: 'Kufam-SemiBoldItalic',
  //   fontSize: 28,
  //   marginBottom: 10,
  //   color: '#051d5f',
  // },
  // hr: {
  //   borderWidth: 1,
  //   borderColor: '#e8e8e8',
  //   width: '100%',
  //   marginVertical: 5,
  // },
});
