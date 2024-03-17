import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColors } from "../../settings/styles/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useData } from "../DataContext";
import { useNavigation } from "@react-navigation/native";
import SearchFreeRestaurant from "./SearchFreeRestaurant";

export default function FreeSearchBar() {
  const [text, setText] = React.useState("");
  const { term, setTerm } = useData();
  const navigation = useNavigation();

  const handleSearch = async () => {
    setTerm(text); // Save the search term
    // Navigate to the "RestaurantList" screen
    navigation.navigate("RestaurantList");
  };


  console.log("FreeSearchBar text: ", text);
  console.log("FreeSearchBar term:", term);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        defaultValue={text}
        placeholder="Restaurants, Food, Drinks, etc"
        enterKeyHint="search"
        selectionColor={PrimaryColors.Green}
      />
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={handleSearch}
      >
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
    paddingLeft: 16,
    borderRadius: 4,

  },
  searchBtn: {
    // backgroundColor: "pink",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
});
