import { View, Text } from 'react-native'
import React from 'react'
import { type } from '../../settings/styles/Typography'
import { spacing } from '../../settings/styles/Spacing'

export default function UserGreeting() {
  return (
    <View>
      <Text style={[type.heading2L, spacing.vert1x]}>Hi, Jane!</Text>
    </View>
  )
}