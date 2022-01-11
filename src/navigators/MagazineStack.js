import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import {MagazineScreen} from '../screens';

const Stack = createStackNavigator();

export default function MagazineStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MagazineScreen'
        component={MagazineScreen}
        options={{
          title: "Magazine",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
