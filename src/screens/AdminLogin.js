import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
//
import { updateUser} from '../redux/action';
import {db} from '../Config/firestore';
//
const LoginScreen = ({navigation}) => {
  const [disable, setdisable] = useState(false);
  const [radioCheck, setradioCheck] = useState('student');
  const [id, setid] = useState();
  const [password, setPassword] = useState();

  // confrim password && navigate to home screen
  const confrimPassword = (userFirestorePassword, userFirestoreid) => {
    if (password === userFirestorePassword && id === userFirestoreid) {
      // setUserInfo(userDetails)
      // storeDataInStorage('userIsLoginTrue');
      navigation.replace('AdminDrawer');
      setdisable(false);
    } else {
      alert('Something Went Wrong');
      setdisable(false);
    }
  };
  // fetching user data from firestore
  const getFirestoreData = () => {
    if (id && password) {
      setdisable(true);
      db.collection('admin')
        .doc('admin')
        .get()
        .then((snapshots) => {
          const userFirestorePassword = snapshots._data.password;
          const userFirestoreid = snapshots._data.id;
          // setUserInfo(snapshots._data);
          confrimPassword(userFirestorePassword, userFirestoreid);
        })
        .catch((error) => {
          alert('Something Went Wrong');
          setid('');
          setPassword('');
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
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../Assets/logo.png')} style={styles.logo} />
        <Text style={styles.text}>Saylani Roll: WM6370</Text>

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
          placeholderText="Admin Id"
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          disable={disable}
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          isLoading={disable}
          buttonTitle="LogIn"
          onPress={() => loginHandler()}
        />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonText}>
            <AntDesign name="arrowleft" size={18} color="#2e64e5" /> Go back
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    // backgroundColor: 'aqua',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#2e64e5',
    borderBottomWidth: 1,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
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
