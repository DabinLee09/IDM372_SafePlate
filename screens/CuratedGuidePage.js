// Import necessary components and data
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { curatedGuideArr } from '../components/curatedGuide/curatedGuideArr';

const CuratedGuidePage = () => {
    // Manually select an index from your curatedGuideArr (e.g., 0 for the first item)
    const selectedIndex = 0;

    // Access the selected item from the array based on the index
    const selectedItem = curatedGuideArr[selectedIndex];

    return (
        <View style={styles.container}>
            {/* Render the content using the properties of the selected item */}
            <Text>{selectedItem.understandingTitle}</Text>
            <Text>{selectedItem.understandingTitle}</Text>
            <Image source={selectedItem.bannerImage} style={styles.image} />
            {/* Render other details of the selected item */}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default CuratedGuidePage;
