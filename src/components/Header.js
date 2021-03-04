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
const Header = ({navigation, title, iconType, ...rest}) => {
  return (
    <>
      <View style={styles.HeaderCont}>
        <Icon
          style={styles.drawericon}
          //   name="ios-menu-sharp"
          name={iconType}
          {...rest}
          color="#0f0f0f"
          size={26}
        />
        <View style={styles.headerTitleCont}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
const styles = StyleSheet.create({
  HeaderCont: {
    // backgroundColor: 'aqua',
    width: windowWidth,
    flexDirection: 'row',
    // justifyContent: 'center'
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    // letterSpacing: 2,
    textTransform: 'capitalize',
},
headerTitleCont: {
    // backgroundColor: 'aqua',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
  },
  drawericon: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
