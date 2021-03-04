import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Divider, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
// local imports
import PostJob from './PostJob';
import MyActionSheet from '../components/ActionSheet';
import SurfaceCard from '../components/SurfaceCard';
import AddButton from '../components/AddButton';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
// import {updateUserData} from '../redux/action';
import {db} from '../Config/firestore';
import {
  studentsHandler,
  companiesHandler,
  jobsHandler,
  createdjobs,
} from '../Admin/NavigationFunctions';
//
const Dashbord = ({navigation, userState}) => {
  // const user = userState.user;
  // const userData = userState.userData;

  // const [adminUsers, setadminUsers] = useState('');

  // const listData = adminUsers.companies;
  // const listData = adminUsers.students
  // console.log('firebase data -->>', listData);
  //
  // const getFirestoreData = () => {
  //   db.collection('admin')
  //     .doc('users')
  //     .get()
  //     .then((snapshots) => {
  //       const adminFirestoreData = snapshots._data;
  //       setadminUsers(adminFirestoreData);
  //     })
  //     .catch((error) => console.alert(error));
  // };
  //
  // useEffect(() => {
  //   getFirestoreData();
  // }, []);

  return (
    <View style={styles.homeContainer}>
      {/* top section down here */}
      <Header
        title="dashboard"
        iconType="ios-menu-sharp"
        onPress={() => navigation.openDrawer()}
      /> 
      <UserCard />
      <View style={styles.topContainer}>
        {/* user menu drawer */}
        {/* <View style={styles.drawerMenuCont}>
          <Icon
            style={styles.drawericon}
            onPress={() => navigation.openDrawer()}
            name="ios-menu-sharp"
            color="#0f0f0f"
            size={26}
          />
        </View> */}

        {/* <View style={styles.homeTitleTextCont}> */}
          {/* <Image source={require('../Assets/logo.png')} style={styles.logo} />
          <Text style={styles.text}>Saylani Roll: WM6370</Text> */}
        {/* </View> */}
        
      </View>
      {/* <View style={styles.bottomContainer}>
        {user === 'student' ? (
          <> */}
      {/*  ---------for student------------- */}
      {/* <View style={styles.surfaceRow}>
              <SurfaceCard
                title="Companies"
                onPress={() => companiesHandler(adminUsers, navigation)}
              />
              <SurfaceCard
                title="Jobs"
                onPress={() => jobsHandler(adminUsers, navigation)}
              />
            </View> */}
      {/*  !!!end---------for student------------- */}
      {/* </> */}
      {/* ) : user === 'company' ? ( */}
      {/* <> */}
      {/* ---------for Companies------------- */}
      {/* <View style={styles.surfaceRow}> */}
      {/* <SurfaceCard
                title="Students"
                onPress={() => studentsHandler(adminUsers, navigation)}
              /> */}
      {/* <SurfaceCard
                title="CVs"
                onPress={() => studentsHandler(adminUsers, navigation)}
              />
            </View> */}

      {/* <View style={styles.surfaceRow}>
              <SurfaceCard
                title="created jobs"
                onPress={() => createdjobs(userData, navigation)}
              /> */}
      {/* <SurfaceCard
                title="CVs"
                onPress={() => studentsHandler(adminUsers, navigation)}
              /> */}
      {/* </View> */}
      {/* !!!end---------for Companies------------- */}
      {/* </> */}
      {/* ) : ( */}
      {/* <> */}
      {/* --------- if not login which is not true------------- */}
      {/* <View style={styles.surfaceRow}>
              <Text>You are not login</Text>
            </View> */}
      {/* </> */}
      {/* )} */}
      {/* </View> */}

      {/* {user === 'company' ? (
        <>
          <View style={styles.addjobBtnCont}> */}
      {/* <AddButton onPress={() => navigation.navigate('PostJob')} /> */}
      {/* <MyActionSheet
          myactionSheetRef="addJob"
          // extendScreen={() => navigation.navigate('SearchDonorScreen')}
          actionSheetHeading="Post job"
          actionComponent={<PostJob />}
          button={<Icon name='md-add-circle' size={60} color="#0f0f0f" />}
        /> */}
      {/* </View> */}
      {/* </> */}
      {/* ) : null} */}
      {/*  */}
    </View>
  );
};
// redux functions
const mapStateToProps = (state) => ({
  // userState: state.userData,
});
// const mapDispatchToProps = (dispatch) =>({
// setUserInfo01: (data) => dispatch(setUserInfo01(data))
// });
export default connect(mapStateToProps, null)(Dashbord);

// Styling Starts from here
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#c9302c',
  },
  topContainer: {
    flex: 4,
    width: '100%',
    paddingBottom: 10,
  },
  bottomContainer: {
    flex: 11,
    width: '100%',
    // backgroundColor: '#f5f5f5',
    borderTopRightRadius: 10,
    // paddingTop: 10,
    paddingBottom: 5,
    borderTopLeftRadius: 10,
  },
  drawerMenuCont: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 8,
    flex: 1,
    paddingRight: 30,
  },

  homeTitleTextCont: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 2,
  },
  homeTitleText: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 5,
  },
  drawericon: {
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  surfaceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginVertical: 10,
    paddingVertical: 10,
  },
  addjobBtnCont: {
    // backgroundColor: 'aqua',
    // display: 'flex',
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
