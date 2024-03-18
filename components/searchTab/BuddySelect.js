import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useData } from "../DataContext";

export default function BuddySelect() {
  const { buddiesInfoArr } = useData();

  const buddyPicker = () => {
  }

  
  return (
    <View>
      <Text>BuddySelect</Text>
      <FlatList
        data={buddiesInfoArr}
        renderItem={({ item, index }) => (
          <View
            style={{
              alignItems: "center",
              // backgroundColor: "pink",
              marginRight: 8,
              width: 60,
            }}
          >
            <TouchableOpacity
              key={index}
              style={{
                alignItems: "center",
                marginBottom: 8,
              }}
              onPress={()=> buddyPicker()}
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
          //   backgroundColor: "red",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        // numColumns={2} // Display four items in one row
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
