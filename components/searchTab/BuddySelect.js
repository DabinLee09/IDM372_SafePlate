import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useData } from "../DataContext";

export default function BuddySelect() {
  const { buddiesInfoArr, setBuddyPick, buddyPick } = useData();
  const [selectedBuddyIndices, setSelectedBuddyIndices] = useState([]); // Track indices of selected buddies

  const toggleBuddySelection = (index, buddy) => {
    // Check if the buddy is already selected
    const isSelected = selectedBuddyIndices.includes(index);
    let newSelectedBuddyIndices;

    if (isSelected) {
      // If selected, remove the buddy from the selection
      newSelectedBuddyIndices = selectedBuddyIndices.filter((selectedIndex) => selectedIndex !== index);
    } else {
      // If not selected, add the buddy to the selection
      newSelectedBuddyIndices = [...selectedBuddyIndices, index];
    }

    setSelectedBuddyIndices(newSelectedBuddyIndices); // Update the state with the new selection

    // Optional: Update the global state with the selected buddies' info
    // This will depend on how you want to use the selected buddies' information elsewhere
    // For example, you could map the indices to buddies' info and update the global state like so:
    // setBuddyPick(newSelectedBuddyIndices.map(i => buddiesInfoArr[i]));
  };

  console.log()
  return (
    <View>
      <Text>BuddySelect</Text>
      <FlatList
        data={buddiesInfoArr}
        renderItem={({ item, index }) => (
          <View
            style={{
              alignItems: "center",
              marginRight: 8,
              width: 60,
            }}
          >
            <TouchableOpacity
              onPress={() => toggleBuddySelection(index, item)} // Toggle selection on press
              style={{
                alignItems: "center",
                marginBottom: 8,
                // Apply a red border if the buddy is selected
                borderWidth: selectedBuddyIndices.includes(index) ? 2 : 0,
                borderColor: 'red',
                borderRadius: 30,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                }}
              />
            </TouchableOpacity>
            <Text>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={{
          gap: 8,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
