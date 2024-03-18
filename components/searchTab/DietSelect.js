import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Pill from "../../settings/Pill";
import { useData } from "../DataContext";
import { PrimaryColors } from "../../settings/styles/Colors";

export default function AllergySelect() {
  const { dietArr, selectedRestriction, setSelectedRestriction} = useData();
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (index) => {
    const newArr = [...dietArr];
    newArr[index].type = newArr[index].type === "active" ? "inactive" : "active";
    const newSelectedItems = newArr.filter((item) => item.type === "active");
    setSelectedItems(newSelectedItems);
    // updateSelectedRestriction(newSelectedItems);
  };

  const updateSelectedRestriction = (newSelectedItems) => {
    if (newSelectedItems) { // Ensure newSelectedItems is defined
      setSelectedRestriction([...selectedRestriction, ...newSelectedItems]);
    }
  };
  
  

  return (
    <View>
      <Text>AllergySelect</Text>
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
            onPress={() => {toggleSelect(index)}}
          >
            <Pill
              size="large"
              type={item.type}
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
      <Text>Selected: {selectedItems.length}</Text>
      <Text>
        {selectedItems.map((item, index) => (
          <Text key={index}>{item.name}, </Text>
        ))}
      </Text>
      <Text>Selected: {selectedRestriction.length}</Text>
      <Text>
        {selectedRestriction.map((item, index) => (
          <Text key={index}>{item.name}, </Text>
        ))}
      </Text>
    </View>
  );
}
