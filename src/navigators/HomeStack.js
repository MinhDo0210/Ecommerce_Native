import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, Cart} from '../screens';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{
          title: "Cart",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
