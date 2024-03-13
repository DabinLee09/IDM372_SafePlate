import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useData } from '../components/DataContext';
import SearchFreeRestaurant from '../components/searchTab/SearchFreeRestaurant';
import FreeSearchBar from '../components/searchTab/FreeSearchBar';

export default function SearchTabType({ navigation }) {
  const { setCity } = useData();
  // console.log("SearchTabType: ", route)

  return (
    <View style={styles.container}>
      <FreeSearchBar />
      <SearchFreeRestaurant />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,

  },
});
