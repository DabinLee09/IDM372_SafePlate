import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColors, TintsColors } from "../../settings/styles/Colors";
import { type } from "../../settings/styles/Typography";

export default function FilterBtnTab() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: TintsColors.LightGray,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 8,
        gap: 4,
        borderRadius: 50,
      }}
    >
      <Text style={[type.body2S, { color: PrimaryColors.Green }]}>Filter</Text>
      <Ionicons name="options" color={PrimaryColors.Green} size={20} />
    </TouchableOpacity>
  );
}
