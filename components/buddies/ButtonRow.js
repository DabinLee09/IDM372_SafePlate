import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { PrimaryColors, TintsColors } from '../../settings/styles/Colors';
import { type } from '../../settings/styles/Typography';
import { spacing } from '../../settings/styles/Spacing';

const ButtonRow = ({ iconName, text }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, {...spacing.vert1x}]}>
        <Ionicons name={iconName} size={24} color={PrimaryColors.Green} />
      </View>
      <Text style={[type.cap2XS, { color: PrimaryColors.Green }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: PrimaryColors.Green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonRow;