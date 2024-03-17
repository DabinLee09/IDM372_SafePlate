import { View, Text, SafeAreaView, Button, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import UserGreeting from '../components/home/UserGreeting'
import SearchTabBtn from '../components/home/SearchTabBtn'

import RestaurantForYou from '../components/home/RestaurantForYou';
import SearchRestaurant from '../components/searchTab/SearchRestaurant';
import { useData } from '../components/DataContext';
import UserLocation from '../components/home/UserLocation';


export default function Home({navigation}) {
  const { city, setCity } = useData();
  // console.log('Home city:', city); // Debug log
  
  return (
    <SafeAreaView style={styles.safeAreaContainer} >
       {/* <TypeSearchBar cityHandler={setCity}/> */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <UserGreeting /> 
        <UserLocation city={city} /> 
        <SearchTabBtn navigation={navigation} setCity={setCity}/>
        {/* <SearchRestaurant city={city}/> */}
        <RestaurantForYou city={city}/>
       
      </ScrollView>
    </SafeAreaView>
  )
}







const styles = StyleSheet.create({
  safeAreaContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
    // paddingBottom: 50,

  },
})