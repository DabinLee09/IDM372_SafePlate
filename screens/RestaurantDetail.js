import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import About from "../components/restaurantDetail/About";
import { TabView, TabBar } from "react-native-tab-view";
import MenuItems from "../components/restaurantDetail/MenuItems";
import Info from "../components/restaurantDetail/Info";
import Reviews from "../components/restaurantDetail/Reviews";
import { PrimaryColors, TintsColors } from "../settings/styles/Colors"; // Assuming you have defined your color constants
import { type } from "../settings/styles/Typography"; // Assuming you have defined your typography styles

export default function RestaurantDetail({ route }) {
  const [openTab, setOpenTab] = useState(0);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <About route={route} />
      <Text>Hello</Text>
      <View style={{ flexDirection: "row" }}>
        {/* Menu Item */}
        {/* Menu Item */}
          <TouchableOpacity
            onPress={() => setOpenTab(0)}
            style={{ backgroundColor: "pink", width: 100, height: 80 }}
          >
            <Text>Menu Item</Text>
          </TouchableOpacity>
        {/* Info */}
        {/* Info */}
          <TouchableOpacity
            onPress={() => setOpenTab(1)}
            style={{ backgroundColor: "pink", width: 100, height: 80 }}
          >
            <Text>Info</Text>
          </TouchableOpacity>
        {/* Reviews */}
        {/* Reviews */}
          <TouchableOpacity
            onPress={() => setOpenTab(2)}
            style={{ backgroundColor: "pink", width: 100, height: 80 }}
          >
            <Text>Reviews</Text>
          </TouchableOpacity>
      </View>



      <View>
        {/* Menu Item */}
        {/* Menu Item */}
      {openTab === 0 && (
          <View>
            <Text>Menu Item open</Text>
          </View>
        )}
        {/* Info */}
        {/* Info */}
        {openTab === 1 && (
          <View>
            <Text>Info open</Text>
          </View>
        )}

        {/* Reviews */}
        {/* Reviews */}
      {openTab === 2 && (
        <View style={{backgroundColor:"lightblue"}}>
        <Text>Reviews open</Text>
        <Reviews />
        </View>
        )}

      </View>
    </ScrollView>
  );
}
