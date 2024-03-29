import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { type } from "../../settings/styles/Typography";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  PrimaryColors,
  SecondaryColors,
  TintsColors,
} from "../../settings/styles/Colors";
import { useData } from "../DataContext";
import { spacing } from "../../settings/styles/Spacing";
import Pill from "../../settings/Pill";
import DietaryIcons from "../../assets/DietaryIcons";
import GlobalStyles from "../../settings/styles/GlobalStyle";
import { FlatList } from "react-native";

const YELP_API_KEY =
  "DaWbOrSWK54qhbQSXVUzcYTsEunAKnfwJ3i4NA8F4oVSSbUdvK5aDF4_xKpSh7fCO63rAVHvuQqEk6V7R3mTFg0y9Q5MiC4hSGEs7AdsE88FTfM7NFlzL73weZQ3ZXYx";

const YELP_API_KEY2 =
  "_Q29t0DrMP00snaLSdvMM2T30atXUugJnLgh5P3ulJ84hkGOW6t1jC_mlJtCO6lZnQ_pLZlxI1-U2WwZCsMaU7x9D8YFjmWKm4gXUxSvPCrKXFrPnMJTeIqiIcbsZXYx";

export default function RestaurantForYou({ props }) {
  const { city, restaurantData, setRestaurantData } = useData();
  const [openCard, setOpenCard] = useState(0);
  const navigation = useNavigation();

  const limit = 7;
  const radius = 5000;

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=philadelphia&limit=${limit}&radius=${radius}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    try {
      const res = await fetch(yelpUrl, apiOptions);
      const json = await res.json();
      if (!res.ok) {
        console.error("HTTP Error:", res.status, json);
        return; // Exit if there's an HTTP error (status code 4xx or 5xx)
      }
      // setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())));
      // setRestaurantData(json.businesses);
      // console.log('Businesses from Yelp:', json.businesses);
      setRestaurantData(
        json.businesses.map((restaurant) => ({
          name: restaurant.name,
          image: restaurant.image_url,
          price: restaurant.price,
          reviews: restaurant.review_count,
          rating: restaurant.rating,
          categories: restaurant.categories,
          is_closed: restaurant.is_closed,
          phone: restaurant.display_phone,
          url: restaurant.url,
          distance: restaurant.distance,
          location: restaurant.location.address1,
        }))
      );
      // console.log("RestaurantForYou:",restaurantData )
    } catch (error) {
      console.error("Error fetching data from Yelp:", error);
    }
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  // console.log("RestaurantForYou", restaurantData)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View>
        {/* Titles */}
        <Text style={[type.heading2L, { marginTop: 24 }]}>
          Restaurants For You
        </Text>
        <Text style={[type.body1M, spacing.vert2x]}>
          Carefully selected based on your restrictions
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurantData}
          renderItem={({ item }) => (
            <View style={{ paddingRight: 16 }}>
              {/* card */}
              <View style={styles.card}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      name: item.name,
                      image: item.image,
                      price: item.price,
                      reviews: item.reviews,
                      rating: item.rating,
                      categories: item.categories,
                      is_closed: item.is_closed,
                      phone: item.display_phone,
                      url: item.url,
                      distance: item.distance,
                      location: item.location,
                    })
                  }
                >
                  <RestaurantImage image={item.image} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setOpenCard(1)}>
                  <RestaurantInfo name={item.name} rating={item.rating} />
                  <RestaurantDietInfo />
                </TouchableOpacity>

                {/* Conditional rendering without TouchableOpacity */}
                {openCard === 1 && (
                  <View>{/* Render additional content */}</View>
                )}

                {/* Remove redundant RestaurantDietInfo */}
                {/* <RestaurantDietInfo /> */}
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </GestureHandlerRootView>
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
        width: 265,
        height: 155,
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
  <View style={{ padding: 8 }}>
    <Text style={type.heading3M}>{props.name}</Text>
    <View
      style={[
        spacing.vert1x,
        { flexDirection: "row", gap: 4, alignItems: "center" },
      ]}
    >
      <Ionicons name="location-sharp" size={16} color={PrimaryColors.Green} />
      <Text style={type.body2S}>1 mi </Text>
      <Ionicons name="star" size={16} color={"#FECA72"} />
      <Text style={type.body2S}>{props.rating} </Text>
    </View>

    <Text style={[type.heading5S, spacing.vert1x]}>
      Dietary-friendly options include:
    </Text>

    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: 240,
      }}
    >
      {/* Pills are hard-coded right now with arbitrary names and icons assigned */}
      <Pill
        style={[spacing.vert1x, { marginRight: 8 }]}
        size="small" // Specify the size: 'small' or 'large'
        type="inactive" // Specify the type: 'active' or 'inactive'
        dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
        text="Dairy" // Specify the text to display in the pill
        icon={DietaryIcons.DairySolid} // Pass the icon component or source if needed
      />

      <Pill
        style={[spacing.vert1x, { marginRight: 8 }]}
        size="small" // Specify the size: 'small' or 'large'
        type="inactive" // Specify the type: 'active' or 'inactive'
        dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
        text="Sesame" // Specify the text to display in the pill
        icon={DietaryIcons.SesameSolid} // Pass the icon component or source if needed
      />

      <Pill
        style={[spacing.vert1x, { marginRight: 8 }]}
        size="small" // Specify the size: 'small' or 'large'
        type="inactive" // Specify the type: 'active' or 'inactive'
        dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
        text="Egg" // Specify the text to display in the pill
        icon={DietaryIcons.EggSolid} // Pass the icon component or source if needed
      />

      <Pill
        style={[spacing.vert1x, { marginRight: 8 }]}
        size="small" // Specify the size: 'small' or 'large'
        type="inactive" // Specify the type: 'active' or 'inactive'
        dietaryType="diet" // Specify the dietary type: 'allergy' or 'diet'
        text="Vegan" // Specify the text to display in the pill
        icon={DietaryIcons.VeganSolid} // Pass the icon component or source if needed
      />

      {/* This is the button for the +4 or whatever the number is in the event of overflow but there is no logic applied right now*/}
      <View
        style={[
          GlobalStyles.radius25x,
          {
            borderWidth: 1,
            borderColor: TintsColors.MidLightGray,
            width: 36,
            height: 36,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text style={[type.body2S, { color: TintsColors.MidLightGray }]}>
          +4
        </Text>
      </View>
    </View>
  </View>
  // </View>
);

const RestaurantDietInfo = () => {
  <View>
    <Text>Restriction Pills</Text>
  </View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    ...GlobalStyles.radius1x,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    ...spacing.vert3x,
  },
});
