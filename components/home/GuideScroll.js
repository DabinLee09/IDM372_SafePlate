import React from 'react';
import { View, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import { spacing } from '../../settings/styles/Spacing';

const GuidesScroll = ({ images, navigation }) => {
  const handleImagePress = (restriction) => {
    navigation.navigate('CuratedGuide', { guide: restriction });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {images.map((item, index) => (
        <Pressable key={index} onPress={() => handleImagePress(item.restriction)}>
          <Image
            source={item.source}
            style={styles.image}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 171,
    height: 256,
    marginRight: 16,
  },
});

export default GuidesScroll;