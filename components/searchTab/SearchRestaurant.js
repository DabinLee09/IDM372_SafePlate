import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { useData } from "../DataContext";

const YELP_API_KEY =
  "DaWbOrSWK54qhbQSXVUzcYTsEunAKnfwJ3i4NA8F4oVSSbUdvK5aDF4_xKpSh7fCO63rAVHvuQqEk6V7R3mTFg0y9Q5MiC4hSGEs7AdsE88FTfM7NFlzL73weZQ3ZXYx";
const YELP_API_KEY2 =
  "_Q29t0DrMP00snaLSdvMM2T30atXUugJnLgh5P3uconst { city, restaurantData, setRestaurantData } = useData();lJ84hkGOW6t1jC_mlJtCO6lZnQ_pLZlxI1-U2WwZCsMaU7x9D8YFjmWKm4gXUxSvPCrKXFrPnMJTeIqiIcbsZXYx";

export default function SearchRestaurant() {
  const {city, setRestaurantData} = useData()  

  const limit = 2;
  const radius = 5000;

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&radius=${radius}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    try {
      const res = await fetch(yelpUrl, apiOptions);
      const json = await res.json();
      // setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())));
      // setRestaurantData(json.businesses);
      console.log("SearchRestaurant:    ", restaurantData);
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
          location: restaurant.location.address1
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
      <Text>SearchRestaurant</Text>
      {/* <Text>{restaurantData}</Text> */}
    </View>
  );
}
