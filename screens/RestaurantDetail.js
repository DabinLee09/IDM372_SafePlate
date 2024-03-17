import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'

export default function RestaurantDetail({ route }) {
  return (
    <ScrollView style={{ backgroundColor: 'white' }} >
      <About route={route} />
    </ScrollView>
  )
}