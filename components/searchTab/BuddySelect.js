import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useData } from "../DataContext";
import { PrimaryColors } from "../../settings/styles/Colors";

export default function BuddySelect() {
  const { buddiesInfoArr, buddyPick, setBuddyPick } = useData();

  const toggleSelect = (index) => {
    const isItemSelected = buddyPick.includes(buddiesInfoArr[index].name);
    let newBuddyPick;

    if (isItemSelected) {
      newBuddyPick = buddyPick.filter(itemName => itemName !== buddiesInfoArr[index].name);
    } else {
      newBuddyPick = [...buddyPick, buddiesInfoArr[index].name];
    }

    setBuddyPick(newBuddyPick);
  };

  return (
    <View>
      <Text>BuddySelect</Text>
      <FlatList
        data={buddiesInfoArr}
        renderItem={({ item, index }) => {
          // Determine if the current item is selected
          const isItemSelected = buddyPick.includes(item.name);
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                margin: 8,
                justifyContent: "space-between",
                width:60,
              }}
            >
              <TouchableOpacity
                onPress={() => toggleSelect(index)}
                style={{
                  alignItems: "center",
                  marginBottom: 8,
                  borderWidth: isItemSelected ? 2 : 0, // Corrected use of isItemSelected
                  borderColor: PrimaryColors.Green,
                  borderRadius: 100,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
      />
    </View>
  );
}
