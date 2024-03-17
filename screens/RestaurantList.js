import { View, Text, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { useData } from '../components/DataContext';

import { type } from '../settings/styles/Typography';
import { PrimaryColors, TintsColors } from '../settings/styles/Colors';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";
import UserLocation from '../components/home/UserLocation';
import FilterBtn from '../components/searchTab/FilterBtn';
import Options from '../components/restaurantList/Options';

export default function RestaurantList() {
  const { restaurantData, city } = useData();
  const navigation = useNavigation();

  // console.log("RestaurantList: restaurant.image_url", restaurantData)

  return (
    <ScrollView style={styles.container}>
      <Text style={[ type.heading2L, TintsColors.DarkGray ]}>Search Result</Text>
      <UserLocation city={city} /> 
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap:8,}}>
      <Options />
      <FilterBtn />
      </View>

      <View>
      <Text>RestaurantList</Text>
      {restaurantData && restaurantData.length > 0 ? (
        restaurantData.map((restaurant, index) => (
          <View key={index}>
            <Text>is_closed: {restaurant.is_closed}</Text>
            {/* Add more information as needed */}
            <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("RestaurantDetail", {
                        name: restaurant.name,
                        image: restaurant.image,
                        price: restaurant.price,
                        reviews: restaurant.reviews,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                        is_closed: restaurant.is_closed,
                        phone: restaurant.display_phone,
                        url: restaurant.url,
                        distance: restaurant.distance,
                      })
                    }
                  >
                    <RestaurantImage image={restaurant.image} />
            </TouchableOpacity>
            <RestaurantInfo
                      name={restaurant.name}
                      rating={restaurant.rating}
                      is_closed={restaurant.is_closed}
                    />
          </View>
        ))
      ) : (
        <Text>No data found</Text>
      )}
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff", 
    padding: 16,


  },
})




const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        // width: 240,
        height: 128,
        position: "relative",
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
      }}
    />
    <TouchableOpacity
      style={{
        position: "absolute",
        right: 20,
        top: 20,
      }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);


const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItem: "Center",
      padding: 8,
      // backgroundColor:'white',
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    }}
  >
    <View style={{ gap: 0 }}>
      <Text style={type.heading3M}>{props.name}</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Ionicons name="location-sharp" size={16} color={PrimaryColors.Green} />
        <Text style={type.body2S}>1 mi </Text>
        <Ionicons name="star" size={16} color={"#FECA72"} />
        <Text style={type.body2S}>{props.rating} </Text>
        <Text >{props.is_closed}</Text>
      </View>
    </View>
  </View>
);