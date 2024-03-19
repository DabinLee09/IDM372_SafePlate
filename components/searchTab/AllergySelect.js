import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Pill from "../../settings/Pill";
import { useData } from "../DataContext";
import { PrimaryColors } from "../../settings/styles/Colors";

export default function AllergySelect() {
  const { allergyArr, selectedRestriction, setSelectedRestriction } = useData();

  const toggleSelect = (index) => {
    // Determine if the current item is selected
    const isItemSelected = selectedRestriction.includes(allergyArr[index].name);
    let newSelectedRestriction;

    if (isItemSelected) {
      // Item is currently selected, so remove it
      newSelectedRestriction = selectedRestriction.filter(itemName => itemName !== allergyArr[index].name);
    } else {
      // Item is not selected, so add it
      newSelectedRestriction = [...selectedRestriction, allergyArr[index].name];
    }

    // Update the global state
    setSelectedRestriction(newSelectedRestriction);
  };

  return (
    <View>
      {/* <Text>AllergySelect</Text> */}
      <FlatList
        data={allergyArr}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "pink",
              marginRight: 8,
              marginBottom: 8,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              height: 48,
            }}
            onPress={() => toggleSelect(index)}
          >
            <Pill
              size="large"
              type={selectedRestriction.includes(item.name) ? "active" : "inactive"}
              dietaryType={item.dietaryType}
              text={item.name}
              icon={item.icon}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ margin: 4 }}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <Text>Selected: {selectedRestriction.length}</Text> */}
      {/* <Text>
        {selectedRestriction.map((name, index) => (
          <Text key={index}>{name}, </Text>
        ))}
      </Text> */}
    </View>
  );
}
