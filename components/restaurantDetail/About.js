import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { spacing } from "../../settings/styles/Spacing";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColors, TintsColors } from "../../settings/styles/Colors";
import { type } from "../../settings/styles/Typography";
import { Divider } from "@rneui/themed";

// const yelpRestaurantInfo = {
//     name: "Louie Louie Restaurant",
//     image: "https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
//     price: "$$",
//     rating: 4.6,
//     categories: [{title: 'Italian'},{title: 'peanut-free'}],
//   }

export default function About(props) {
  const { name, image, price, rating, categories, reviews } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" | ");

  const description = `${formattedCategories} ${price ? "." + price : ""}`;
  // console.log('About image: ', image )
  // console.log('About name: ', name )

  return (
    <View>
      <RestaurantImage image={image}/>
      <View style={[{ paddingHorizontal: 16, gap: 24, marginTop: 24 }]}>
        <View>
          <RestaurantTitle name={name} />
          <RestaurantDescription description={description} />
        </View>
        <InfoIcons />
        <InfoTexts rating={rating} reviews={reviews} />
      </View>
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{ height: 180 }}
    onError={(error) => console.log("Image loading error:", error)}
  />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      color: "#343434",
      fontSize: 20,
      fontWeight: "700",
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      color: "#4D4D4D",
      fontWeight: "400",
      fontSize: 16,
    }}
  >
    {props.description}
  </Text>
);

const InfoIcons = () => (
  <View style={{flexDirection: "row", justifyContent: "space-around"}}>
    <View style={{ alignItems: "center", gap:8}}>
      <TouchableOpacity
        style={{
          borderRadius: 25,
          borderWidth: 1,
          width: 40,
          height: 40,
          borderColor: PrimaryColors.Green,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="call-outline" color={PrimaryColors.Green} size={20} />
      </TouchableOpacity>
      <Text style={[type.cap2XS, {color: PrimaryColors.Green}]}>Call</Text>
    </View>
    <View style={{ alignItems: "center", gap:8 }}>
      <TouchableOpacity
        style={{
          borderRadius: 25,
          borderWidth: 1,
          width: 40,
          height: 40,
          borderColor: PrimaryColors.Green,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="map-outline" color={PrimaryColors.Green} size={20} />
      </TouchableOpacity>
      <Text style={[type.cap2XS, {color: PrimaryColors.Green}]}>Directions</Text>
    </View>
    <View style={{ alignItems: "center", gap:8 }}>
      <TouchableOpacity
        style={{
          borderRadius: 25,
          borderWidth: 1,
          width: 40,
          height: 40,
          borderColor: PrimaryColors.Green,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="share-outline" color={PrimaryColors.Green} size={20} />
      </TouchableOpacity>
      <Text style={[type.cap2XS, {color: PrimaryColors.Green}]} >Share</Text>
    </View>
  </View>
);

const InfoTexts = (props) => (
    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" , borderRadius:4, borderWidth: 1, borderColor: "#F3F3F3"}}>
        <TouchableOpacity style={{alignItems: "center",  paddingVertical: 8, justifyContent: "center"}}>
            <Text style={[type.heading3M, {color:TintsColors.DarkGray}]}>{props.rating}</Text>
            <Text style={[type.cap4xs, {color: TintsColors.MidGray}]} >Rating</Text>
        </TouchableOpacity>
        <Divider orientation="vertical" color="#F3F3F3" width={1} />
        <TouchableOpacity style={{alignItems: "center", paddingVertical: 8,}}>
            <Text style={[type.heading3M, {color:TintsColors.DarkGray}]}>Editer's</Text>
            <Text style={[type.heading3M, {color:TintsColors.DarkGray}]}>Choice</Text>
        </TouchableOpacity>
        <Divider orientation="vertical" color="#F3F3F3" width={1} />
        <TouchableOpacity style={{alignItems: "center", paddingVertical: 8,}}>
            <Text style={[type.heading3M, {color:TintsColors.DarkGray}]}>{props.reviews}</Text>
            <Text style={[type.cap4xs, {color: TintsColors.MidGray}]} >Reviews</Text>
        </TouchableOpacity>
    </View>
)