import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens';

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
    </Stack.Navigator>
  )
}
