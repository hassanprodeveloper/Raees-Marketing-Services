import React from 'react';
import TabNavigator from '../components/BottomTab/navigation/TabNavigator';
import TabBarProvider from '../components/BottomTab/contexts/TabBarProvider';

export default function BottomTab() {
  return (
    <TabBarProvider>
      <TabNavigator />
    </TabBarProvider>
  );
}
