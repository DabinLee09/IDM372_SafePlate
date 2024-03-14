import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryColors, TintsColors } from '../../settings/styles/Colors';
import { type } from '../../settings/styles/Typography';
import { spacing } from '../../settings/styles/Spacing';

const BuddyInfo = ({ imageSource, name, username, restrictions }) => {
  return (
    <View style={styles.container}>
        <Image
            source={imageSource} 
            style={styles.image}
            resizeMode="cover"
        />

        <View style={styles.column}>
            <Text style={[type.heading4M, { color: TintsColors.MidGray }]}>{name}</Text>
            <Text style={[type.body3S, { color: TintsColors.MidLightGray }]}>{username}</Text>
            <Text style={[type.cap3XS, { color: TintsColors.MidLightGray }]}>{restrictions}</Text>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    ...spacing.vert2x,
    
    borderBottomWidth: 1, 
    borderColor: TintsColors.Platinum, 
    paddingBottom: 16
  },

  column: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 24,
  },

    image: {
    width: 56,
    height: 56,
    marginRight: 24
  },
  
});

export default BuddyInfo;