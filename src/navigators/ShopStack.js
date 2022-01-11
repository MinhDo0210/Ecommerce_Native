import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import {ShopScreen} from '../screens';

const Stack = createStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ShopScreen'
        component={ShopScreen}
        options={{
          title: "Shop",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
