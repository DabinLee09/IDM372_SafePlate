import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react'

import { spacing } from '../settings/styles/Spacing';
import { type } from '../settings/styles/Typography';
import GlobalStyles from '../settings/styles/GlobalStyle';
import Pill from '../settings/Pill';
import CustomButton from '../settings/CustomButton';
import DietaryIcons from '../assets/DietaryIcons';
// import GlobalStyles from '../components/settings/GlobalStyle'
// import { PrimaryColors, SecondaryColors, TintsColors } from '../components/settings/Colors'
// import { spacing } from '../components/settings/Spacing'
// import { type } from '../components/settings/Typography'
// import DietaryPill from '../components/Pill'
// import DietaryIcons from '../assets/Icons'
// import Button from '../components/Button'

export default function StyleTest() {
  return (
    <ScrollView>
      <SafeAreaView></SafeAreaView>
        <View style={[GlobalStyles.grid]}>
        <Text style={[type.heading1XL, spacing.vert2x]}>32px Heading - Bold</Text>
          <Text style={[type.heading2L, spacing.vert1x]}>20px Heading - Bold</Text>
          <Text style={[type.heading3M, spacing.vert1x]}>16px Heading - Bold</Text>
          <Text style={[type.heading4M, spacing.vert1x]}>16px Heading - Medium</Text>
          <Text style={[type.heading5S, spacing.vert3x]}>14px Heading - Bold</Text>

          <Text style={type.body4L}>20px Body - Regular</Text>
          <Text style={type.body1M}>16px Body - Regular</Text>
          <Text style={type.body2S}>14px Body - Regular</Text>
          <Text style={[type.body3S, spacing.vert3x]}>14px Body - Light Italic</Text>
          
          <Text style={type.cap1XS}>12px Cap - Bold</Text>
          <Text style={type.cap2XS}>12px Cap - Medium</Text>
          <Text style={type.cap3XS}>12px Cap - Light Italic</Text>
          <Text style={[type.cap4XS, spacing.vert3x]}>12px Cap - Regular</Text>

        <View style={{ alignItems: 'left' }}>
          <Pill
            style={spacing.vert2x} // Apply vertical spacing
            size="small" // Specify the size: 'small' or 'large'
            type="inactive" // Specify the type: 'active' or 'inactive'
            dietaryType="diet" // Specify the dietary type: 'allergy' or 'diet'
            text="Diet S" // Specify the text to display in the pill
            icon={DietaryIcons.VegetarianSolid} // Pass the icon component or source if needed
          />
        <Pill
            style={spacing.vert2x} // Apply vertical spacing
            size="large" // Specify the size: 'small' or 'large'
            type="inactive" // Specify the type: 'active' or 'inactive'
            dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
            text="Allergy L" // Specify the text to display in the pill
            icon={DietaryIcons.WheatSolid} // Pass the icon component or source if needed
          />
        </View>

          <View style={{alignItems: 'left', marginBottom: 20}} >
            <CustomButton active={true} text="Active S" size="small"/>
          </View>

          <View style={{alignItems: 'left', marginBottom: 20}} >
            <CustomButton active={false} text="Inactive M" size="medium"/>
          </View>

          <View style={{marginBottom: 20}} >
            <CustomButton text="Active L" size="large"/>
          </View>
        
      </View>
    </ScrollView>
  );
}