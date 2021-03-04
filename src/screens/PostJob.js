import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
//
import { updateUser} from '../redux/action';
import {connect} from 'react-redux';
import {db} from '../Config/firestore';
//
const PostJob = ({navigation, userState}) => {
  const userData = userState.userData
  console.log(userData)
  const [disable, setdisable] = useState(false);
  const [jobTitle, setjobTitle] = useState();
  const [jobId, setjobId] = useState(`${userData.id}job${userData.totalJobs + 1}`);
  const [companyName, setcompanyName] = useState(userData.name);
// 
const newJob={
  name: jobTitle,
  by: companyName,
  id: jobId,
}
  // 
const jobs = userData.jobs

  // 
  // confrim password && navigate to home screen
  // const confrimPassword = (userFirestorePassword, userFirestoreid) => {
  //   if (password === userFirestorePassword && id === userFirestoreid) {
  //     // setUserInfo(userDetails)
  //     // storeDataInStorage('userIsLoginTrue');
  //     navigation.replace('AdminDrawer');
  //     setdisable(false);
  //   } else {
  //     alert('Something Went Wrong');
  //     setdisable(false);
  //   }
  // };
  // setting job data to firestore
  const setFirestoreData = () => {
    if (jobTitle && companyName ) {
      setdisable(true);
      db.collection('company')
        .doc(userData.id)
        .set(jobs)
        .then((snapshots) => {
          // const userFirestorePassword = snapshots._data.password;
          // const userFirestoreid = snapshots._data.id;
          // // setUserInfo(snapshots._data);
          // confrimPassword(userFirestorePassword, userFirestoreid);
          console.log('firestore arry is updated', snapshots)
          setdisable(false);
        })
        .catch((error) => {
          console.log('firestore arry is not updated', error)
          // alert('Something Went Wrong');
          // setid('');
          // setPassword('');
          // setdisable(false);
          setdisable(false);
        });
    } else {
      alert('Fill all required fields...');
      setdisable(false);
    }
  };
  const postjobHandler = () => {
    setdisable(true);
    jobs.push(newJob)
    console.log(jobs)
    setFirestoreData()
    // setdisable(true);
    // getFirestoreData();
  };

  return (
    <>
      <View style={styles.container}>
      <View style={styles.drawerMenuCont}>
          <Icon
            style={styles.drawericon}
            onPress={() => navigation.openDrawer()}
            name="ios-menu-sharp"
            color="#0f0f0f"
            size={26}
          />
        </View>
        <Image source={require('../Assets/logo.png')} style={styles.logo} />
        <Text style={styles.text}>Post a Job</Text>

        <Text style={styles.idtext}>Job Id: {jobId} </Text>
        <FormInput
          disable={disable}
          labelValue={jobTitle}
          onChangeText={(text) => setjobTitle(text)}
          placeholderText="Job Title"
          iconType="plus"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          disable={disable}
          labelValue={companyName}
          onChangeText={(text) => setcompanyName(text)}
          placeholderText="Company Name"
          iconType="plus"
          // autoCapitalize="none"
          autoCorrect={false}
          // secureTextEntry={true}
        />

        <FormButton
          isLoading={disable}
          buttonTitle="Post"
          onPress={() => postjobHandler()}
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
// redux functions
const mapStateToProps = (state) => ({
  userState: state.userData,
});
// const mapDispatchToProps = (dispatch) =>({
// setUserInfo01: (data) => dispatch(setUserInfo01(data))
// });
export default connect(mapStateToProps, null)(PostJob);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 7,
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
  idtext: {
    alignSelf: 'flex-end',
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 15,
    marginBottom: 5,
    color: '#051d5f',
  },
  drawerMenuCont: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // paddingHorizontal: 10,
    // paddingTop: 8,
    // flex: 1,
    // paddingRight: 30,
  },
    drawericon: {
    paddingVertical: 3,
    // paddingHorizontal: 10,
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
