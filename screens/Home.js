import { View, Text, SafeAreaView, Button, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import UserGreeting from '../components/home/UserGreeting'
import SearchTabBtn from '../components/home/SearchTabBtn'

import RestaurantForYou from '../components/home/RestaurantForYou';
import SearchRestaurant from '../components/searchTab/SearchRestaurant';
import { useData } from '../components/DataContext';
import UserLocation from '../components/home/UserLocation';
import { type } from '../settings/styles/Typography';
import { spacing } from '../settings/styles/Spacing';
import { TintsColors } from '../settings/styles/Colors';
import GuidesScroll from '../components/home/GuideScroll';

export default function Home({navigation}) {
  const { city, setCity } = useData();
  // console.log('Home city:', city); // Debug log
  const guideImages = [
    { source: require('../assets/images/curatedGuides/Diet-card-treenut.png'), restriction: 'treenut' },
    { source: require('../assets/images/curatedGuides/Diet-card-vegetarian.png'), restriction: 'vegetarian' },
    { source: require('../assets/images/curatedGuides/Diet-card-keto.png'), restriction: 'keto' },
    { source: require('../assets/images/curatedGuides/Diet-card-dairy.png'), restriction: 'dairy' },
    { source: require('../assets/images/curatedGuides/Diet-card-gluten.png'), restriction: 'gluten' },
    { source: require('../assets/images/curatedGuides/Diet-card-shellfish.png'), restriction: 'shellfish' },
    { source: require('../assets/images/curatedGuides/Diet-card-peanut.png'), restriction: 'peanut' },
    { source: require('../assets/images/curatedGuides/Diet-card-soy.png'), restriction: 'soy' },
    { source: require('../assets/images/curatedGuides/Diet-card-sesame.png'), restriction: 'sesame' },
    { source: require('../assets/images/curatedGuides/Diet-card-egg.png'), restriction: 'egg' },
    { source: require('../assets/images/curatedGuides/Diet-card-fish.png'), restriction: 'fish' },
    { source: require('../assets/images/curatedGuides/Diet-card-vegan.png'), restriction: 'vegan' },
    { source: require('../assets/images/curatedGuides/Diet-card-halal.png'), restriction: 'halal' },
  ];
  
  return (
    <SafeAreaView style={styles.safeAreaContainer} >
       {/* <TypeSearchBar cityHandler={setCity}/> */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <UserGreeting /> 
        <UserLocation city={city} /> 
        <SearchTabBtn navigation={navigation} setCity={setCity}/>
        {/* <SearchRestaurant city={city}/> */}
        <RestaurantForYou city={city}/>


        <Text style={[type.heading2L, spacing.vert1x, {color: TintsColors.DarkGray}]}>Curated Guides by SafePlate</Text>
        <Text style={[type.body1M, spacing.vert2x, {color: TintsColors.DarkGray}]}>Tips and educational content for each dietary need</Text>
        <GuidesScroll images={guideImages} navigation={navigation} />
       
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