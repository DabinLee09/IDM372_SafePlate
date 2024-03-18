import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PrimaryColors } from "../../settings/styles/Colors";
import { type } from "../../settings/styles/Typography";
import { spacing } from "../../settings/styles/Spacing";

export default function UserLocation({cityHandler, city}) {
    console.log("UserLocation: ",city)
  return (
    <View style={[styles.container, spacing.vert2x]}>
      <Ionicons name="location-sharp" size={24} color={PrimaryColors.Green} />
      <Text style={[type.heading3M, {color: PrimaryColors.Green}]}>{city}</Text>
      <Ionicons name="caret-down-outline" size={24} color={PrimaryColors.Green} />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})