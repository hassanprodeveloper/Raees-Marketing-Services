import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Create from '../components/Create';
import Profile from '../components/IssueStock';
import TabBar from '../components/TabBar';
import * as TabScreens from '../components/TabScreens'
import * as Screens from '../../../Navigation/Screens'
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Stock'
        component={TabScreens.PresentStock}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Issue'
        component={TabScreens.IssueStock}
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
