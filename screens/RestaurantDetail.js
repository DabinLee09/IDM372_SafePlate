import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import About from "../components/restaurantDetail/About";
import { TabView, TabBar } from "react-native-tab-view";
import MenuItems from "../components/restaurantDetail/MenuItems";
import Info from "../components/restaurantDetail/Info";
import Reviews from "../components/restaurantDetail/Reviews";
import ReviewsTest from "../components/restaurantDetail/ReviewsTest";
import { PrimaryColors, TintsColors } from "../settings/styles/Colors"; // Assuming you have defined your color constants
import { type } from "../settings/styles/Typography"; // Assuming you have defined your typography styles
import FullMenu from "../components/restaurantDetail/FullMenu";
import FilteredMenu from "../components/restaurantDetail/FilteredMenu";

export default function RestaurantDetail({ route }) {
  const [openTab, setOpenTab] = useState(0);
  const [select, setSelect] = useState(true);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <About route={route} />

      {/* <Text>Hello</Text> */}

      {/* Menu Items */}
      <View style={styles.tabGroup}>
        <TouchableOpacity onPress={() => setOpenTab(0)} style={{ flex: 1 }}>
          <Text
            style={[styles.tabText, openTab === 0 && styles.selectedTabText]}
          >
            Menu Items
          </Text>
        </TouchableOpacity>

        {/* Info */}
        <TouchableOpacity onPress={() => setOpenTab(1)} style={{ flex: 1 }}>
          <Text
            style={[styles.tabText, openTab === 1 && styles.selectedTabText]}
          >
            Info
          </Text>
        </TouchableOpacity>

        {/* Reviews */}
        <TouchableOpacity onPress={() => setOpenTab(2)} style={{ flex: 1 }}>
          <Text
            style={[styles.tabText, openTab === 2 && styles.selectedTabText]}
          >
            Reviews
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {/* Menu Item */}
        {/* Menu Item */}
        {openTab === 0 && (
          <View>
            <View style={{ flexDirection: "row", backgroundColor: TintsColors.LightGray, padding: 16,}}>
              {/* FilteredMenu */}
              <TouchableOpacity
                onPress={() => setSelect(true)}
                style={[{ flex: 1 }, select ? styles.selectedBtn : styles.unSelectedBtn]}
              >
                <Text
                  style={[
                    styles.tabText,select ? styles.selectedBtnText : styles.unSelectedBtnText
                  ]}
                >
                  FilteredMenu
                </Text>
              </TouchableOpacity>

              {/* FullMenu */}
              <TouchableOpacity
                onPress={() => setSelect(false)}
                style={[{ flex: 1 },  select ? styles.unSelectedBtn : styles.selectedBtn]}
              >
                <Text
                  style={[
                    styles.tabText, select ? styles.unSelectedBtnText : styles.selectedBtnText
                  ]}
                >
                  FullMenu
                </Text>
              </TouchableOpacity>
            </View>
            {select ? (
             <FilteredMenu route={route} />
            ) : (
              <FullMenu route={route} />
            )}
          </View>
        )}

        {/* Info */}
        {/* Info */}
        {openTab === 1 && (
          <View>
            <Info route={route} />
          </View>
        )}

        {/* Reviews */}
        {/* Reviews */}
        {openTab === 2 && (
          <View style={{ backgroundColor: "white" }}>
            {/* <Text>Reviews open</Text> */}
            <ReviewsTest route={route} />
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
    textAlign: "center",
  },
  selectedTabText: {
    color: PrimaryColors.Green,
  },

  tabGroup: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: TintsColors.Platinum,
    alignContent: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },

  selectedBtn: {
    padding: 8,
    backgroundColor: PrimaryColors.Green,
    borderRadius: 4,
    color: "white"

  },
  unSelectedBtn: {
    padding: 8,
    backgroundColor: "#DCE7E6",
    borderRadius: 4,
    color: PrimaryColors.Green,

  },
  selectedBtnText: {
    color: "white"

  },
  unSelectedBtnText: {
    color: PrimaryColors.Green,
  }


});


