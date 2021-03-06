import React, {useContext, useState} from 'react';
import Signature from '../components/Signature';
import LogoHeader from '../components/LogoHeader';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
// import RadioButton from '../components/RadioButton';
//
import {connect} from 'react-redux';
import {updateUserData, updateUser} from '../redux/action';
//
import {db} from '../Config/firestore';
import {MMKV} from 'react-native-mmkv';

const LoginScreen = ({navigation, setUserData, setUser}) => {
  const [disable, setdisable] = useState(false);
  // const [radioCheck, setradioCheck] = useState('student');
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  // console.log('user id ', id)

  // confrim password && navigate to home screen
  const confrimPassword = (userFirestorePassword, userFirestoreData) => {
    if (password !== userFirestorePassword) {
      setdisable(false);
      alert('Something Went Wrong');
      setPassword('');
      setid('');
    } else {
      MMKV.set('isLogin', true)
      navigation.replace('Drawer');
      setdisable(false);
    }
  };
  // fetching user data from firestore
  const getFirestoreData = () => {
    if (id && password) {
      setdisable(true);
      db.collection('auth')
        .doc(id)
        .get()
        .then((snapshots) => {
          console.log('user firestore snapshots', snapshots);
          const userFirestoreData = snapshots._data;
          const userFirestorePassword = snapshots._data.password;
          console.log('user firestore data', userFirestoreData);
          confrimPassword(userFirestorePassword, userFirestoreData);
        })
        .catch((error) => {
          alert('Something Went Wrong catch' , error);
          console.assert('user firestore error', error);
          setPassword('');
          setid('');
          setdisable(false);
        });
    } else {
      alert('Fill all required fields...');
      setdisable(false);
    }
  };
  const loginHandler = () => {
    setdisable(true);
    getFirestoreData();

    // db.collection('auth')
    // .get()
    // .then((snapshots) => {
    //   console.log('firestore collection snapshots', snapshots);
    // })
    // .catch((error) => {
    //   console.assert('firestore collection error', error);
    // });
  };
  return (
    <>
      <View style={styles.container}>
        {/* <Image source={require('../Assets/logo.png')} style={styles.logo} />
        <Text style={styles.text}>RAEES MARKETING SERVICES</Text> */}
        <LogoHeader />
        {/* Radio Buttons */}
        {/* <RadioButton
          disable={disable}
          title="Select"
          label1="student"
          label2="company"
          checked={radioCheck}
          setchecked={setradioCheck}
        /> */}

        <FormInput
          disable={disable}
          labelValue={id}
          onChangeText={(id) => setid(id)}
          // placeholderText={`${radioCheck} Id `}
          placeholderText="Order Booker Id"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={() => console.log('user id ', id)}
        />

        <FormInput
          disable={disable}
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
          onBlur={() => console.log('user password ', password)}
        />

        <FormButton
          isLoading={disable}
          buttonTitle="LogIn"
          onPress={() => loginHandler()}
        />

        {/* <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
        </TouchableOpacity> */}
      </View>

      {/* <View style={styles.adminCont}>
        <TouchableOpacity
          style={styles.adminButton}
          onPress={() => {
            // navigation.navigate('AdminLogin');
          }}>
          <Text style={styles.signature}>
            HA Developers ORG.
          </Text>
        </TouchableOpacity>
      </View> */}
      <Signature />
    </>
  );
};
//
// const mapStateToProps = (state) => ({
// });
const mapDispatchToProps = (dispatch) => ({
  setUserData: (data) => dispatch(updateUserData(data)),
  setUser: (data) => dispatch(updateUser(data)),
});
export default connect(null, mapDispatchToProps)(LoginScreen);
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    // backgroundColor: 'aqua',
  },
  // logo: {
  //   height: 160,
  //   width: 160,
  //   resizeMode: 'cover',
  // },
  // text: {
  //   fontFamily: 'Archino',
  //   fontSize: 18,
  //   marginTop: -40,
  //   marginBottom: 30,
  //   color: '#051d5f',
  // },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 45,
  },
  adminButton: {
    marginVertical: 5,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0172bb',
    fontFamily: 'Lato-Regular',
  },
  signature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f0f0f',
    fontStyle: 'italic',
    // fontFamily: 'Lato-Regular',
  },
  hr: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    width: '100%',
    marginVertical: 5,
  },
  adminCont: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    // backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
