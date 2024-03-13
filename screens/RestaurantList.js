import { View, Text } from 'react-native'
import React from 'react'
import { useData } from '../components/DataContext';

export default function RestaurantList() {
  const { restaurantData } = useData();

  return (
    <View>
      <Text>RestaurantList</Text>
      {restaurantData && restaurantData.length > 0 ? (
        restaurantData.map((restaurant, index) => (
          <View key={index}>
            <Text>Name: {restaurant.name}</Text>
            <Text>Price: {restaurant.price}</Text>
            <Text>Reviews: {restaurant.reviews}</Text>
            {/* Add more information as needed */}
          </View>
        ))
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  )
}