import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PrimaryColors, TintsColors } from "../../settings/styles/Colors";
import { type } from "../../settings/styles/Typography";
import { spacing } from "../../settings/styles/Spacing";

export default function SearchTabBtn({ navigation }) {
  return (
    <TouchableOpacity
      style={[styles.container, spacing.vert3x]}
      onPress={() => navigation.navigate("SearchTabGroup")}
    >
      <Ionicons name="search" color={PrimaryColors.Green} size={20} />
      <Text style={[type.body1M,{color: TintsColors.MidGray}]}>Select buddies, restrictions, location</Text>
      {/* <Button title='SearchTabBtn' onPress={() => navigation.navigate('SearchTabGroup')} /> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#F6F6F6",
    paddingVertical: 8,
    paddingHorizontal:16,
    borderRadius: 4,
    gap: 8,

  },
});
