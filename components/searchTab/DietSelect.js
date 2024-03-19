import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import React from "react";
import Pill from "../../settings/Pill";
import { useData } from "../DataContext";
import { PrimaryColors } from "../../settings/styles/Colors";
import { type } from "../../settings/styles/Typography";
import { spacing } from "../../settings/styles/Spacing";

export default function DietSelect() {
  const { dietArr, selectedRestriction, setSelectedRestriction } = useData();

  const toggleSelect = (index) => {
    // Determine the current item's selected state and toggle it
    const isItemSelected = selectedRestriction.includes(dietArr[index].name);
    let newSelectedRestriction;

    if (isItemSelected) {
      // Item is currently selected, remove it from the selectedRestriction
      newSelectedRestriction = selectedRestriction.filter(itemName => itemName !== dietArr[index].name);
    } else {
      // Item is not selected, add it to the selectedRestriction
      newSelectedRestriction = [...selectedRestriction, dietArr[index].name];
    }

    setSelectedRestriction(newSelectedRestriction);
  };

  return (
    <View>
      <Text style={styles.cardSub}>Select your diets</Text>
      <FlatList
        data={dietArr}
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
      {/* <Text>Selected: {selectedRestriction.length}</Text>
      <Text>
        {selectedRestriction.map((name, index) => (
          <Text key={index}>{name}, </Text>
        ))}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cardSub: {
  ...type.body1M,
  ...spacing.vert1x,
  marginTop: 16
  },
});
