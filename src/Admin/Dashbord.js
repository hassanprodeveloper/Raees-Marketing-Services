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
// importing functions from action file
import {updateUserData} from '../redux/action';
// importing components
import Icon from 'react-native-vector-icons/Ionicons';
// import WelcomeHeading from '../components/WelcomeHeading'
import SurfaceCard from '../components/SurfaceCard';
import ListCard from '../components/ListCard';
import {db} from '../Config/firestore';
//
import {studentsHandler, companiesHandler, jobsHandler} from './NavigationFunctions';
import {updateAdminData} from '../redux/action'
//
// 
const Dashbord = ({navigation, userState , setAdminData, adminData}) => {
  const user = userState.user;
  const adminUsers = adminData

  const getFirestoreData = () => {
    db.collection('admin')
      .doc('users')
      .get()
      .then((snapshots) => {
        const adminFirestoreData = snapshots._data;
        // setadminUsers(adminFirestoreData);
        setAdminData(adminFirestoreData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFirestoreData();
  }, []);
  return (
    <View style={styles.homeContainer}>
      {/* top section down here */}
      <View style={styles.topContainer}>
        {/* user menu drawer */}
        <View style={styles.drawerMenuCont}>
          <Icon
            style={styles.drawericon}
            onPress={() => navigation.openDrawer()}
            name="ios-menu-sharp"
            color="#0f0f0f"
            size={26}
          />
        </View>
        <View style={styles.homeTitleTextCont}>
          <Image source={require('../Assets/logo.png')} style={styles.logo} />
          <Text style={styles.text}>Saylani Roll: WM6370</Text>
        </View>
      </View>
      {/* ---------------------- */}
      <View style={styles.bottomContainer}>
        <View style={styles.surfaceRow}>
          <SurfaceCard
            title="Comannies"
            onPress={() => companiesHandler(adminUsers, navigation)}
          />
          <SurfaceCard
            title="Students"
            onPress={() => studentsHandler(adminUsers, navigation)}
          />
        </View>
        <View style={styles.surfaceRow}>
          <SurfaceCard
            title="Jobs"
            onPress={() =>jobsHandler(adminUsers, navigation)
            }
          />
          <SurfaceCard
            title="CVs"
            onPress={() => studentsHandler(adminUsers, navigation)}
         />
        </View>
        {/* <View style={styles.surfaceRow}>
          <SurfaceCard
            title="Requests"
            onPress={() =>
              navigation.navigate('ListScreen', {
                listData,
                ScreeTitle: 'Companies',
              })
            }
          />
        </View> */}
      </View>
      {/* <View style={styles.addjobBtnCont}>
      <TouchableOpacity style={styles.addjobBtn}>
        <Text style={styles.addjobBtnText}>Add A job</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
// redux functions
const mapStateToProps = (state) => ({
  userState: state.userData,
  adminData: state.admin.adminData,
});
const mapDispatchToProps = (dispatch) =>({
setAdminData: (data) => dispatch(updateAdminData(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashbord);
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
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: 10,
    paddingVertical: 10,
  },
  addjobBtnCont: {
    width: '100%',
    backgroundColor: 'aqua',
    padding: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  addjobBtnText: {
    fontSize: 20,
  },
});
