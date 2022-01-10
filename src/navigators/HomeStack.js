import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function HomeStack() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Icon name="ios-location-outline" size={20} color={'black'}/>
    </View>
  )
}
