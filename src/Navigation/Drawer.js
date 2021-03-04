import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../components/DrawerContent'
import Header from '../components/Header'
import * as Screens from "./Screens";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <>
      <Drawer.Navigator  drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Dashbord" component={Screens.Dashbord} />
        <Drawer.Screen name="PostJob" component={Screens.PostJob} />
        <Drawer.Screen name="ListScreen" component={Screens.ListScreen} />
        <Drawer.Screen name="Home" component={Screens.Home} />
        <Drawer.Screen name="About" component={Screens.About} />
        {/* <Drawer.Screen name="HeaderComponent" component={Header} /> */}
      </Drawer.Navigator>
    </>
  );
}