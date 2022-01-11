import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Entypo from 'react-native-vector-icons/Entypo';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeStack, ShopStack, MagazineStack} from '../navigators';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='ShopStack'
        component={ShopStack}
        options={{
          title: 'Shop',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Font5 name="shopping-bag" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='MagazineStack'
        component={MagazineStack}
        options={{
          title: 'Magazine',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
