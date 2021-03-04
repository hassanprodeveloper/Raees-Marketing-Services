import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import {Button} from 'react-native-paper';
const ListCard = ({name, id}) => {
  return (
    <>
      <View style={styles.userInfoCard}>
        <View style={styles.userInfoCardTitleCont}>
          <Text style={{...styles.title, fontSize: 19}}>{name}</Text>
          <View>
            {/* <Text style={styles.userInfo}>
                Email: <Text>c002</Text>
            </Text> */}
            <Text style={styles.userInfo}>
              id: <Text>{id}</Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userInfoCard: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    // shadow css down here
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  userInfoCardTitleCont: {
    margin: 5,
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    //  color: '#676767'
  },
  userInfo: {
    textTransform: 'capitalize',
    paddingLeft: 15,
    fontSize: 14,
    paddingTop: 3,
  },
});

export default ListCard;
