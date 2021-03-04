import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyFlatList from '../components/FlatList';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListScreen = ({
  route: {
    params: {listData, ScreeTitle},
  },
  navigation,
}) => {
  return (
    <>
      <View style={styles.headerCont}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.iconStyle}>
            <Icon
              onPress={() => navigation.openDrawer()}
              name="ios-menu-sharp"
              color="#0f0f0f"
              size={26}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.headerTextCont}>
          <Text style={styles.headerText}>{ScreeTitle} </Text>
        </View>
      </View>
      <View style={styles.contentCont}>
        {listData !== null && listData !== undefined ? (
          <MyFlatList renderData={listData} />
        ) : (
          <>
            <Text style={styles.listMsg}> {ScreeTitle} List is empty </Text>
            <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonText}>
            <AntDesign name="arrowleft" size={18} color="#0f0f0f" /> Go back
          </Text>
        </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerCont: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  contentCont: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  headerTextCont: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
    // alignItems:'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    // width: 50,
    paddingRight: 10,
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  button: {
    margin: 10,
  },
  listMsg: {
    color: '#0f0f0f',
    fontSize: 15,
    alignSelf: 'center',
    marginVertical: 30,
    textTransform: 'capitalize',
  },
  forgotButton: {
    marginVertical: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0f0f0f',
    fontFamily: 'Lato-Regular',
  },
});
export default ListScreen;
