import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AdminDrawerContent from '../components/AdminDrawerContent'
import * as Screens from "./Screens";

const Drawer = createDrawerNavigator();

export default function AdminDrawer() {
  return (
    <>
      <Drawer.Navigator  drawerContent={props => <AdminDrawerContent {...props}/>}>
        <Drawer.Screen name="AdminDashbord" component={Screens.AdminDashbord} />
        <Drawer.Screen name="Home" component={Screens.Home} />
        <Drawer.Screen name="ListScreen" component={Screens.ListScreen} />
        <Drawer.Screen name="About" component={Screens.About} />
      </Drawer.Navigator>
    </>
  );
}