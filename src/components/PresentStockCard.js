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

const PresentStockCard = ({name, box, issue,rate, id}) => {
  const totalStock = box + issue 
  // const issue = true
  return (
    <>
      <View style={styles.SkuCard}>
        {/* <View style={{ marginLeft:-10,}}>
          <Text style={styles.rateText}>{id}</Text>
        </View> */}
        <View style={styles.userIdCont}>
          <Text style={styles.userNameText}>{name}</Text>
          <Text style={styles.rateText}>Per Box Rs: {rate}/-</Text>
          <Text style={styles.rateText}>{id}</Text>
        </View>

        <View style={styles.stockMainCont}>
          <View style={styles.stockCont}>
            <Text style={styles.userNameText}>{box}</Text>
            <Text style={styles.rateText}>Boxs</Text>
          </View>
          {/* <TextInput style={{...styles.textInput, display: issue? 'flex' : 'none'}} maxLength={3} keyboardType='number-pad' /> */}
        </View>

        <View style={styles.stockMainCont}>
          <View style={styles.stockCont}>
            <Text style={styles.userNameText}>{box}</Text>
            <Text style={styles.rateText}>Issue</Text>
          </View>
          {/* <TextInput style={{...styles.textInput, display: issue? 'flex' : 'none'}} maxLength={3} keyboardType='number-pad' /> */}
        </View>

        <View style={styles.stockMainCont}>
          <View style={styles.stockCont}>
            <Text style={styles.userNameText}>{totalStock}</Text>
            <Text style={styles.rateText}>Total</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default PresentStockCard;

const styles = StyleSheet.create({
  SkuCard: {
    // backgroundColor: 'aqua',
    // width: windowWidth,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderRadius: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  userIdCont: {
    flex: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  stockMainCont: {
    flex: 1,
    // backgroundColor: 'blue',
    // margin: 2,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  stockCont: {
    // backgroundColor: 'blue',
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  rateText: {
    color: '#0f0f0f',
    fontSize: 10,
    textTransform: 'capitalize',
  },
  // boxText: {
  //   color: '#0f0f0f',
  //   fontSize: 12,
  //   textTransform: 'capitalize',
  //   marginHorizontal: 4,
  // },
  textInput: {
    // backgroundColor: 'aqua',
    flex: 1,
    borderColor: '#0f0f0f',
    borderWidth: 1,
    height: 32,
    fontSize: 15,
    padding: 0,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    borderRadius: 10,
  },
});
