import { View, Text } from "react-native";
import React from "react";
import { PrimaryColors, TintsColors } from "../../settings/styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import { type } from "../../settings/styles/Typography";
import { spacing } from "../../settings/styles/Spacing";

export default function Info(props) {
  const { phone, url, location} = props.route.params;
  console.log("phone, url", phone, url, location)
  return (
    <View style={{ backgroundColor: TintsColors.LightGray, paddingTop: 24, paddingHorizontal: 16, }}>
      <Text style={[type.heading2L, {color: TintsColors.DarkGray}, spacing.vert1x]}>Info</Text>
      
      <View style={[{ flexDirection: "row", alignItems: "center", justifyContent:"space-between"}, spacing.vert2x]}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"flex-start" }}>
          <Text style={[type.heading3M, {color: TintsColors.MidGray}]}>Hours: </Text>
          <Text style={[type.body1M, {color: TintsColors.MidGray}]} >11:30 AM - 8:00 PM</Text>
        </View>
        <Ionicons
          name="arrow-forward-outline"
          size={24}
          style={{ color: PrimaryColors.Green }}
        />
      </View>

      <View style={[{ flexDirection: "row", alignItems: "center", justifyContent:"space-between"}, spacing.vert2x]}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"flex-start" }}>
          <Text style={[type.heading3M, {color: TintsColors.MidGray}]}>Website: </Text>
          <Text style={[type.body1M, {color: TintsColors.MidGray}]} >restaurant.com</Text>
        </View>
        <Ionicons
          name="exit-outline"
          size={24}
          style={{ color: PrimaryColors.Green }}
        />
      </View>

      <View style={[{ flexDirection: "row", alignItems: "center", justifyContent:"space-between"}, spacing.vert2x]}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"flex-start" }}>
          <Text style={[type.heading3M, {color: TintsColors.MidGray}]}>Call: </Text>
          <Text style={[type.body1M, {color: TintsColors.MidGray}]} >(123)456-789</Text>
        </View>
        <Ionicons
          name="exit-outline"
          size={24}
          style={{ color: PrimaryColors.Green }}
        />
      </View>

      <View style={[{ flexDirection: "row", alignItems: "center", justifyContent:"space-between"}, spacing.vert4x]}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"flex-start" }}>
          <Text style={[type.heading3M, {color: TintsColors.MidGray}]}>Address: </Text>
          <Text style={[type.body1M, {color: TintsColors.MidGray}]} >{location}</Text>
        </View>
        <Ionicons
          name="exit-outline"
          size={24}
          style={{ color: PrimaryColors.Green }}
        />
      </View>


      


    </View>
  );
}
