import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import About from "../components/restaurantDetail/About";
import { TabView, TabBar } from "react-native-tab-view";
import MenuItems from "../components/restaurantDetail/MenuItems";
import Info from "../components/restaurantDetail/Info";
import Reviews from "../components/restaurantDetail/Reviews";
import ReviewsTest from "../components/restaurantDetail/ReviewsTest";
import { PrimaryColors, TintsColors } from "../settings/styles/Colors"; // Assuming you have defined your color constants
import { type } from "../settings/styles/Typography"; // Assuming you have defined your typography styles

export default function RestaurantDetail({ route }) {
  const [openTab, setOpenTab] = useState(0);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <About route={route}/>

      {/* <Text>Hello</Text> */}

      {/* Menu Items */}
      <View style={styles.tabGroup}>
          <TouchableOpacity
            onPress={() => setOpenTab(0)}
            style={{flex: 1}}>
            <Text style={[styles.tabText, openTab === 0 && styles.selectedTabText]}>Menu Items</Text>
          </TouchableOpacity>

        {/* Info */}
          <TouchableOpacity
            onPress={() => setOpenTab(1)}
            style={{flex: 1}}>
            <Text style={[styles.tabText, openTab === 1 && styles.selectedTabText]}>Info</Text>
          </TouchableOpacity>

        {/* Reviews */}
          <TouchableOpacity
            onPress={() => setOpenTab(2)}
            style={{flex: 1}}>
          <Text style={[styles.tabText, openTab === 2 && styles.selectedTabText]}>Reviews</Text>
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
        <View style={{backgroundColor:"white"}}>
        {/* <Text>Reviews open</Text> */}
        <ReviewsTest />
        </View>
        )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabText: {
    ...type.heading4M,
    color: TintsColors.MidGray,
    textAlign: 'center'
  },
  selectedTabText: {
    color: PrimaryColors.Green,
  },

  tabGroup: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: TintsColors.Platinum,
    alignContent: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
})