import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { useData } from "../DataContext";

const YELP_API_KEY =
  "DaWbOrSWK54qhbQSXVUzcYTsEunAKnfwJ3i4NA8F4oVSSbUdvK5aDF4_xKpSh7fCO63rAVHvuQqEk6V7R3mTFg0y9Q5MiC4hSGEs7AdsE88FTfM7NFlzL73weZQ3ZXYx";
const YELP_API_KEY2 =
  "_Q29t0DrMP00snaLSdvMM2T30atXUugJnLgh5P3uconst { city, restaurantData, setRestaurantData } = useData();lJ84hkGOW6t1jC_mlJtCO6lZnQ_pLZlxI1-U2WwZCsMaU7x9D8YFjmWKm4gXUxSvPCrKXFrPnMJTeIqiIcbsZXYx";

export default function SearchFreeRestaurant() {
  const {city, setRestaurantData, restaurantData} = useData()  

  const limit = 2;
  const radius = 100;

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&limit=${limit}&radius=${radius}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    try {
      const res = await fetch(yelpUrl, apiOptions);
      const json = await res.json();
      setRestaurantData(json.businesses);
      console.log("SearchFreeRestaurant:    ", setRestaurantData);
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
        }))
      );
    } catch (error) {
      console.error("Error fetching data from Yelp:", error);
    }
  }

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);



  return (
    <View>
      <Text>SearchFreeRestaurant</Text>
      {restaurantData && restaurantData.length > 0 ? (
        restaurantData.map((restaurant, index) => (
          <View key={index}>
            <Text>Name: {restaurant.name}</Text>
            <Text>Price: {restaurant.price}</Text>
            <Text>Reviews: {restaurant.reviews}</Text>
            {/* Add more information as needed */}
          </View>
        ))
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  );
}
