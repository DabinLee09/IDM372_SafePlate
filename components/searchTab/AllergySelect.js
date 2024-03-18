import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Pill from '../../settings/Pill';
import { spacing } from '../../settings/styles/Spacing';
import DietaryIcons from '../../assets/DietaryIcons';
import { useData } from '../DataContext';
import { PrimaryColors } from '../../settings/styles/Colors';

export default function AllergySelect() {
  const { allergyArr } = useData();
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleSelect = (index) => {
    const newArr = [...allergyArr];
    newArr[index].type = newArr[index].type === 'active' ? 'inactive' : 'active';
    const newSelectedCount = newArr.filter(item => item.type === 'active').length;
    setSelectedCount(newSelectedCount);
  };

  return (
    <View>
      <Text>AllergySelect</Text>
      <FlatList
  data={allergyArr} // Pass the data to FlatList
  renderItem={({ item, index }) => ( // Render item for FlatList
    <TouchableOpacity
      key={index}
      style={{ backgroundColor: "pink", borderRadius: 50, borderColor: PrimaryColors.Green }}
      onPress={() => toggleSelect(index)}
    >
      <Pill
        size="large"
        type={item.type}
        dietaryType={item.dietaryType}
        text={item.name}
        icon={item.icon}
      />
    </TouchableOpacity>
  )}
  numColumns={2} // Set number of columns for FlatList
  keyExtractor={(item, index) => index.toString()} // Key extractor for FlatList
/>
    </View>
  );
}
