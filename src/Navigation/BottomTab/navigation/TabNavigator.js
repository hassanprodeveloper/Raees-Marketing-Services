import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Create from '../components/Create';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import * as Screens from '../../Screens'
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={Screens.Dashbord}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Create'
        component={Screens.PostJob}
        initialParams={{ icon: 'plus' }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileNavigator}
        initialParams={{ icon: 'user' }}
      />
      <Tab.Screen
        name='About'
        component={ProfileNavigator}
        initialParams={{ icon: 'user' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
