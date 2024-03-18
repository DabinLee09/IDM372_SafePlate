import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useData } from "../components/DataContext";

import { type } from "../settings/styles/Typography";
import {
  PrimaryColors,
  SecondaryColors,
  TintsColors,
} from "../settings/styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";
import UserLocation from "../components/home/UserLocation";
import FilterBtn from "../components/searchTab/FilterBtn";
import Options from "../components/restaurantList/Options";

import GlobalStyles from "../settings/styles/GlobalStyle";
import { spacing } from "../settings/styles/Spacing";
import Pill from "../settings/Pill";
import DietaryIcons from "../assets/DietaryIcons";
import { FlatList } from "react-native";

export default function RestaurantList() {
  const { restaurantData, city, selectedRestriction, filteredItems} = useData();
  const navigation = useNavigation();

  console.log("selectedRestriction", selectedRestriction)
  console.log("filteredItems", filteredItems)

  // console.log("RestaurantList: restaurant.image_url", restaurantData)

  return (
    <ScrollView style={[styles.container, GlobalStyles.grid]}>
      <Text style={[type.heading2L, spacing.vert2x]}>Search Results</Text>
      <UserLocation city={city} />
      <View style={styles.searchRow}>
        <Options />
        <FilterBtn />
      </View>

      <View>
        {/* <Text>RestaurantList</Text> */}
        {restaurantData && restaurantData.length > 0 ? (
          restaurantData.map((restaurant, index) => (
            <View key={index} style={styles.card}>
              {/* <Text>is_closed: {restaurant.is_closed}</Text> */}
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
              <RestaurantRestriction />
              
            </View>
          ))
        ) : (
          <Text>No data found</Text>
        )}
      </View>
    </ScrollView>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        // width: 240,
        width: 358,
        height: 128,
        position: "relative",
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
      }}
    />
    <TouchableOpacity
      style={{
        position: "absolute",
        // right: 20,
        // top: 20,
        right: 8,
        top: 8,
      }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={styles.infoContainer}>
    <View style={{ gap: 0 }}>
      <Text style={type.heading3M}>{props.name}</Text>

      <View
        style={[
          spacing.vert1x,
          { flexDirection: "row", gap: 4, alignItems: "center" },
        ]}
      >
        <Ionicons name="location-sharp" size={16} color={PrimaryColors.Green} />
        <Text style={type.body2S}>1 mi </Text>
        <Ionicons name="star" size={16} color={SecondaryColors.BrightYellow} />
        <Text style={type.body2S}>{props.rating} </Text>
        {/* how can we dynamically pull the info if the restaurant is open or closed */}
        <Text style={type.body2S}>{props.is_closed}</Text>
      </View>

    </View>
  </View>
);

const RestaurantRestriction = () => {
  const { filteredItems, selectedRestriction } = useData(); // Access filteredItems from context

  // Update the type of each item in filteredItems based on selectedRestriction
  const updatedItems = filteredItems.map((item) => ({
    ...item,
    type: selectedRestriction.includes(item.name) ? "active" : "inactive",
  }));

  return (
    <View>
      <Text style={[type.heading5S, spacing.vert1x]}>
        Dietary-friendly options include:
      </Text>
      <FlatList
        data={updatedItems} // Use updatedItems instead of filteredItems
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index}>
            <Pill
              size="small"
              type={item.type} // Use the updated type property
              dietaryType={item.dietaryType}
              text={item.name}
              icon={item.icon}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ margin: 4 }}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },

  card: {
    backgroundColor: TintsColors.White,
    ...GlobalStyles.radius1x,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    ...spacing.vert3x,
  },

  infoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  searchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    ...spacing.vert3x,
  },
});
