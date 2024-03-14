import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryColors, TintsColors } from './styles/Colors'; 
import GlobalStyles from './styles/GlobalStyle';
import { spacing } from './styles/Spacing';
import { type } from './styles/Typography';

const SearchBar = ({ placeholder }) => {
    return (
        <View style={[styles.container, spacing.vert3x]}>
            <Ionicons name="search" color={PrimaryColors.Green} size={20} />
            <Text style={[type.body1M,{color: TintsColors.MidGray}]}>{placeholder}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: TintsColors.LightGray,
      paddingVertical: 8,
      paddingHorizontal:16,
      borderRadius: 4,
      gap: 8,
    },
});

export default SearchBar;