import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from './Screens';
// 
import { connect } from 'react-redux';
import {
  updateUser1,
} from '../redux/action' 
// 

const {Screen, Navigator} = createStackNavigator();

const Navigations = ({isLogin}) => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="SplashScreen" component={Screens.SplashScreen} />
        <Screen name="LoginScreen" component={Screens.LoginScreen} />
        <Screen name="SignupScreen" component={Screens.SignupScreen} />
        <Screen name="AdminLogin" component={Screens.AdminLogin} />
        <Screen name="Drawer" component={Screens.Drawer} />
        <Screen name="AdminDrawer" component={Screens.AdminDrawer} />



        {/* <Screen name="Welcome" component={Screens.Welcome} />
          <Screen name="Home" component={Screens.Home} /> */}
        {/* <Screen name="About" component={Screens.About} /> */}
      </Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) =>({
  isLogin: state.userData.isLogin,
  // user2: state.r2.user,
});
const mapDispatchToProps = (dispatch) =>({
addUser: (data) => dispatch(updateUser1(data))  
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigations);
