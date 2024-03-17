import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryColors, TintsColors } from '../../settings/styles/Colors'

export default function FilterBtn() {
  return (
    <TouchableOpacity style={{
        width: 48,
        height: 48,
        borderRadius:4,
        backgroundColor: "#F6F6F6",
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Ionicons name='options' color={PrimaryColors.Green} size={20}/>
    </TouchableOpacity>
  )
}