import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {windowWidth, windowHeight} from '../Assets/Dimensions';

const SkuCard = () => {
  return (
    <>
      <View style={styles.SkuCard}>

        <View style={styles.userIdCont}>
          <Text style={styles.userNameText}>t/p tiger</Text>
          {/* <Text style={styles.userIdText}>Rs 108</Text> */}
        </View>
        
        <View style={styles.stockCont}>
          <Text style={styles.userNameText}>3</Text>
          <Text style={styles.boxText}>Boxs</Text>
        </View>

      </View>
    </>
  );
};

export default SkuCard;

const styles = StyleSheet.create({
  SkuCard: {
    // backgroundColor: 'aqua',
    width: windowWidth,
    // width: '100%',
    padding: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    // marginHorizontal: 5,
    borderRadius: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  //   userAvatarCont: {
  //     margin: 5,
  //     padding: 5,
  //   },
  userIdCont: {
    flex: 3,
    // backgroundColor: 'blue',
    // margin: 2,
    paddingHorizontal: 12,
    paddingVertical: 12,

    // 
    // shadowColor: '#0f0f0f',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.9,
    // shadowRadius: 0.5,
    // elevation: 1,
    // 
  },
  stockCont: {
    flex: 1,
    // backgroundColor: 'blue',
    // margin: 2,
    flexDirection: 'row',
    // paddingHorizontal: 12,
    // paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 50,
  },
  userNameText: {
    color: '#0f0f0f',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  userIdText: {
    color: '#0f0f0f',
    fontSize: 12,
    textTransform: 'capitalize',
    // fontWeight: 'bold',
    // marginHorizontal: 8,
  },
  boxText: {
    color: '#0f0f0f',
    fontSize: 12,
    textTransform: 'capitalize',
    // fontWeight: 'bold',
    marginHorizontal: 4,
  },
});
