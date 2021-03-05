import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import TabBarProvider from './contexts/TabBarProvider';

export default function BottomTab() {
  return (
    <TabBarProvider>
      <TabNavigator />
    </TabBarProvider>
  );
}
