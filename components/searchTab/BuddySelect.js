import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-web'
import { useData } from '../DataContext';

export default function BuddySelect() {
    const { BuddySelect } = useData();
  return (
    <View>
      <Text>BuddySelect</Text>
      <FlatList
        data={buddiesInfoArr}
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
          >
          </TouchableOpacity>
        )}
        contentContainerStyle={{ margin: 4 }}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}