import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { PrimaryColors } from '../../settings/styles/Colors';
import { useData } from '../DataContext';

export default function SearchLocation() {
    const { setCity } = useData();
  return (
    <View style={{flexDirection: 'row'}}>
      <GooglePlacesAutocomplete 
      query={{key: "AIzaSyCJ0Zb-uZYB2VWAEFqBh-xZX-DIb12NGF0", language: 'en' }}
      placeholder='Zipcode, area, city'
    //   currentLocation={true}
    
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        fetchDetails = true
        // console.log(data, details, "\n\n");
        const city = data.description.split(',')[0]+data.description.split(',')[1];
        setCity(city);
        console.log("SearchLocation", city);
      }}
      styles={{
        textInput: styles.textInput,
        textInputContainer: styles.textInputContainer,
      }}

      renderLeftButton={() => (
        <View style={{marginLeft: 16 }}>
          <MaterialCommunityIcons name="magnify" size={24} color={PrimaryColors.Green} />
        </View>
        )} 




      />
      
    </View>
  )
}



const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#F6F6F6',
        borderRadius: 4,
        fontWeight: "400",
        marginVertical: 4,
        marginHorizontal: 4,
    },
    textInputContainer: {
        backgroundColor: "#F6F6F6",
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",

    }
})