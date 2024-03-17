import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import React from 'react'
import { useData } from '../components/DataContext';
import SearchFreeRestaurant from '../components/searchTab/SearchFreeRestaurant';
import FreeSearchBar from '../components/searchTab/FreeSearchBar';

import { FadeIn, FadeOut, SlideInDown } from "react-native-reanimated";
import { type } from '../settings/styles/Typography';
import { PrimaryColors } from '../settings/styles/Colors';


export default function SearchTabType({ navigation }) {
  const { setCity } = useData();
  // console.log("SearchTabType: ", route)

  const onClearAll = () => {
    <Text></Text>
  };

  return (
    <View style={styles.container}>
      <FreeSearchBar />
      <SearchFreeRestaurant />


      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onClearAll}>
            <Text style={[{textDecorationLine: "underline", color:PrimaryColors.Green}, type.heading5S ]}>
              Clear All
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => router.back()} style={styles.btn}> */}
          <TouchableOpacity style={styles.btn} 
          onPress={() => navigation.navigate('RestaurantList')}
          >
  <Text style={[styles.btnText, type.heading5S]}>Continue</Text>
</TouchableOpacity>

        </View>
      </Animated.View>



    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,

  },
  footer: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: "white",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: PrimaryColors.Green,
  },
  btnText: {
    // fontSize: 16,
    // lineHeight: 21,
    // fontWeight: 'bold',
    // letterSpacing: 0.25,
    color: "white",
  },
});
