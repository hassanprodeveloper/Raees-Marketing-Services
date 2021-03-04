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

const UserCard = () => {
  return (
    <>
      <View style={styles.UserCard}>
        <View style={styles.userAvatarCont}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/raees-marketing-services-803df.appspot.com/o/profile.png?alt=media&token=14d1de19-90a6-4705-9dc4-547b39c75c2c',
            }}
          />
        </View>

        <View style={styles.userIdCont}>
          <Text style={styles.userNameText}>m hassan</Text>
          <Text style={styles.userIdText}>d0189ob1</Text>
        </View>
      </View>
    </>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  UserCard: {
    // backgroundColor: 'aqua',
    width: windowWidth,
    // padding: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    // marginHorizontal: 5,
},
  userAvatarCont:{
      margin: 5,
      padding: 5,
  },
  userIdCont:{
      margin: 2,
      padding: 2,
      paddingVertical: 12,
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
    textTransform: 'capitalize' ,
  },
  userIdText: {
    color: '#0f0f0f',
    fontSize: 12,
    // fontWeight: 'bold',
    textTransform: 'uppercase',
    marginHorizontal: 8,
  },
});
