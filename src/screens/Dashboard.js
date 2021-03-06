import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
// local imports
import PostJob from './PostJob';
import MyActionSheet from '../components/ActionSheet';
import SurfaceCard from '../components/SurfaceCard';
import AddButton from '../components/AddButton';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
import SkuCard from '../components/SkuCard';
// import {updateUserData} from '../redux/action';
import {db} from '../Config/firestore';
import BottomTab from '../Navigation/BottomTab';
import { SKULIST} from '../redux/List/SkuList'
import { StockList} from '../redux/List/PresentStockList'

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
  useEffect(() => {
    navigation.navigate('BottomTab');
    // getFirestoreData();
  }, []);

  return (
    <View style={styles.homeContainer}>
      {/* top section down here */}
      <Header
        title="dashboard"
        iconType="ios-menu-sharp"
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.bottomContainer}>
      <ScrollView>
        {/* {
          StockList.map((item, i)=> <SkuCard name={item.name} box={item.box} />
            )
        } */}
        </ScrollView>
      </View>
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
