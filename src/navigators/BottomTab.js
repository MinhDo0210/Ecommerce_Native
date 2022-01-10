import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeStack from './HomeStack';
import ShopStack from './ShopStack';
import MagazineStack from './MagazineStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      <Tab.Screen
        name='ShopStack'
        component={ShopStack}
        options={{
          title: 'Shop',
          headerShown: false
        }}
      />
      <Tab.Screen
        name='MagazineStack'
        component={MagazineStack}
        options={{
          title: 'Magazine',
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}
