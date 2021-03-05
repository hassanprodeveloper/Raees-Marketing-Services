import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  Avatar,
  Switch,
  ScrollView,
  Text,
  Caption,
  Paragraph,
  Drawer,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import UserCard from '../components/UserCard';
import Signature from './Signature';

const DrawerContent = (props) => {
  // const userData = props.userData.userData;
  // const user = props.userData.user;
  // const [inDarkTheme, setIsDarkTheme] = React.useState(false);
  // const toggleTheme = () => {
  //   setIsDarkTheme(!inDarkTheme);
  // };

  const drawerItems = [
    {
      label: 'Present Stock',
      iconType: 'add',
      onpress: () => props.navigation.navigate('Dashbord'),
    },
    {
      label: 'Issue Stock',
      iconType: 'add',
      onpress: () => console.log('hellow item '),
    },
    {
      label: 'Sync Data',
      iconType: 'arrow-up',
      onpress: () => console.log('hellow item 2'),
    },
    {
      label: 'Tab',
      // iconType: 'arrow-up',
      onpress: () => props.navigation.navigate('BottomTab'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfSection}>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <UserCard />
              {/* <Image
                style={styles.logo}
                // source={require('../Assets/logo1.png')}
                source={require('../Assets/logo1.png')}
              /> */}
            </View>
            {/* ------ name and details */}
            {/* <View style={{marginLeft: 15}}>
                <Title style={styles.title}> Name_  {userData.name}</Title>
                <Title style={styles.title}> Email_  {userData.email}</Title>
                <Caption style={styles.caption}>Id_ {userData.id}</Caption>
              </View> */}
            {/* !-- */}
          </View>
          <Drawer.Section style={styles.drawerSection}>
            {drawerItems.map((item, i) => {
              return (
                <>
                  <DrawerItem
                    style={styles.drawerItem}
                    icon={({color, size}) => (
                      <Icon name={item.iconType} color={color} size={size} />
                    )}
                    label={item.label}
                    onPress={item.onpress}
                  />
                </>
              );
            })}

            {/* <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="ios-add-sharp" color={color} size={size} />
                  )}
                  label="issue stock"
                  onPress={() => props.navigation.navigate('Dashbord')}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="account-network" color={color} size={size} />
                  )}
                  label="Companies"
                  onPress={() => props.navigation.navigate('Companies')}
                />

                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="alpha-j" color={color} size={size} />
                  )}
                  label="Jobs"
                  onPress={() => props.navigation.navigate('DrawerHome')}
                /> */}
            {/* !!!!-------------- student section end */}
          </Drawer.Section>
          {/* -------------- company section end */}

          {/* !!!!-------------- company section end */}
          {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preferences}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={inDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => props.navigation.replace('LoginScreen')}
        />
      </Drawer.Section> */}
      <Signature />
    </View>
  );
};
//
const mapStateToProps = (state) => ({
  userData: state.userData,
});
const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => dispatch(updateUserData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

// STYLE SHEET DWON HERE
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
  userInfSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    color: '#0f0f0f',
    // fontWeight: 'bold',
    marginTop: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItem:{ 
    textTransform: 'capitalize',
  },
  section: {
    marginRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
