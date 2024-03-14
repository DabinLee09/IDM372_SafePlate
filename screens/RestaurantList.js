import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useData } from '../components/DataContext';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../settings/styles/GlobalStyle';
import { spacing } from '../settings/styles/Spacing';
import { type } from '../settings/styles/Typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryColors, SecondaryColors, TintsColors } from '../settings/styles/Colors';
import Pill from '../settings/Pill';
import DietaryIcons from '../assets/DietaryIcons';
import UserLocation from '../components/home/UserLocation';

export default function RestaurantList() {
  const { city, setCity, restaurantData } = useData();
  const navigation = useNavigation();

  return (
    <ScrollView style={[styles.container, GlobalStyles.grid]} showsVerticalScrollIndicator={false}>
      <Text style={[type.heading2L, spacing.vert2x]}>Search Results</Text>

      <UserLocation city={city} />


        {restaurantData && restaurantData.length > 0 ? (
          restaurantData.map((restaurant, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("RestaurantDetail", restaurant)}>
              <View style={styles.card}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
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
                    })
                  }>
                  <RestaurantImage image={restaurant.image} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <RestaurantInfo
                    name={restaurant.name}
                    rating={restaurant.rating}
                    is_closed={restaurant.is_closed}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No data found</Text>
        )}
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
    <Text style={type.heading3M}>{props.name}</Text>

    <View style={[spacing.vert1x, { flexDirection: 'row', gap: 4, alignItems: 'center' }]}>
      <Ionicons name="location-sharp" size={16} color={PrimaryColors.Green} />
      <Text style={type.body2S}>1 mi </Text>
      <Ionicons name="star" size={16} color={SecondaryColors.BrightYellow} />
      <Text style={type.body2S}>{props.rating} </Text>
      {/* how can we dynamically pull the info if the restaurant is open or closed */}
      <Text style={type.body2S}>Currently open{props.is_closed}</Text>
    </View>

    <Text style={[type.heading5S, spacing.vert1x]}>Dietary-friendly options include:</Text>

    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>

      {/* Pills are hard-coded right now with arbitrary names and icons assigned */}
      <Pill
        style={[spacing.vert1x, { marginRight: 8 }]}
        size="small" // Specify the size: 'small' or 'large'
        type="active" // Specify the type: 'active' or 'inactive'
        dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
        text="Dairy" // Specify the text to display in the pill
        icon={DietaryIcons.DairySolid} // Pass the icon component or source if needed
      />

      <Pill
        style={[spacing.vert1x, { marginRight: 8 }]}
        size="small" // Specify the size: 'small' or 'large'
        type="inactive" // Specify the type: 'active' or 'inactive'
        dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
        text="Peanut" // Specify the text to display in the pill
        icon={DietaryIcons.PeanutSolid} // Pass the icon component or source if needed
      />

      <Pill
        style={[spacing.vert1x, { marginRight: 8 }]}
        size="small" // Specify the size: 'small' or 'large'
        type="active" // Specify the type: 'active' or 'inactive'
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
        text="Vegetarian" // Specify the text to display in the pill
        icon={DietaryIcons.VegetarianSolid} // Pass the icon component or source if needed
      />

      <Pill
        style={[spacing.vert1x, { marginRight: 8 }]}
        size="small" // Specify the size: 'small' or 'large'
        type="active" // Specify the type: 'active' or 'inactive'
        dietaryType="diet" // Specify the dietary type: 'allergy' or 'diet'
        text="Vegan" // Specify the text to display in the pill
        icon={DietaryIcons.VeganSolid} // Pass the icon component or source if needed
      />

    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    backgroundColor: TintsColors.White,
    ...GlobalStyles.radius1x,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    ...spacing.vert3x,
  },

  infoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
});