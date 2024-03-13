import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColors } from "../../settings/styles/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useData } from "../DataContext";

export default function FreeSearchBar() {
  const [text, onChangeText] = React.useState("");
  const { term, setTerm } = useData();


  console.log("text: ", text);
  console.log("term:", term)
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Restaurants, Food, Drinks, etc"
      />
      <TouchableOpacity style={styles.searchBtn} onPress={()=> setTerm(text)}>
        <Ionicons name="search" color={PrimaryColors.Green} size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "space-between",
    //   paddingVertical: 16,
    //   paddingHorizontal:16,
    paddingLeft: 16,
    borderRadius: 4,
    gap: 8,
  },
  input: {
    backgroundColor: "#F6F6F6",
  },
  searchBtn: {
    // backgroundColor: "pink",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
});
