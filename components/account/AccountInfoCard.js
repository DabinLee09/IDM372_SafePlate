import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { PrimaryColors, TintsColors } from '../../settings/styles/Colors';
import { type } from '../../settings/styles/Typography';
import { spacing } from '../../settings/styles/Spacing';
import GlobalStyles from '../../settings/styles/GlobalStyle';

import AccountPreferences from './AccountPreferences';

const AccountInfoCard = ({ imageSource, name, username }) => {
  return (
    <View style={styles.container}>
      <Image
        source={imageSource} // Use the imageSource prop passed from the parent component
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.rectangle}>
        <Text style={[type.heading2L, { color: TintsColors.DarkGray, paddingTop: 16}]}>{name}</Text>
        <Text style={[type.body1M, { color: TintsColors.MediumGray }]}>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 105.5,
    position: 'absolute',
    top: 0,
    zIndex: 20,
  },
  rectangle: {
    width: '100%',
    backgroundColor: TintsColors.White, // Use TintsColors.White for the rectangle background
    marginTop: 74, // Adjust as needed
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.1)', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowRadius: 15, // Shadow radius
    shadowOpacity: 1, // Shadow opacity
    elevation: 5, // Android shadow elevation
    ...GlobalStyles.radius1x,
    zIndex: 10,
    ...spacing.vert3x
  }
});

export default AccountInfoCard;