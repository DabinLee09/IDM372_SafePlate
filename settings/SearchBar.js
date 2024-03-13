import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { PrimaryColors, TintsColors } from './styles/Colors'; 
import GlobalStyles from './styles/GlobalStyle';
import { spacing } from './styles/Spacing';

const SearchBar = ({ placeholder }) => {
    return (
        <View style={styles.container}>
        <Ionicons name="search" size={24} color={TintsColors.MidGray} style={{marginRight: 8}}/>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={TintsColors.MidGray}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: TintsColors.SearchGray,
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
        ...GlobalStyles.radius1x,
        ...spacing.vert3x
    },
});

export default SearchBar;