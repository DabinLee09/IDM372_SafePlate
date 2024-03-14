import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { PrimaryColors, TintsColors } from '../settings/styles/Colors';
import { type } from '../settings/styles/Typography';
import { spacing } from '../settings/styles/Spacing';
import GlobalStyles from '../settings/styles/GlobalStyle';

import DietaryPill from '../settings/Pill';
import DietaryIcons from '../assets/DietaryIcons';

import AccountInfoCard from '../components/account/AccountInfoCard';
import AccountPreferences from '../components/account/AccountPreferences';

export default function Account() {
  const isActive = true; // Example of determining isActive dynamically based on your application logic

  return (
    <ScrollView style={{ backgroundColor: TintsColors.White }}>
      <SafeAreaView>
        <View style={GlobalStyles.grid}>
          <Text style={GlobalStyles.pageHeader}>Account</Text>

          <AccountInfoCard
            imageSource={require('../assets/images/avatars/avt-account.png')}
            name="Jane Doe"
            username="@janedoe123"
          />

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[type.heading3M, spacing.vert2x, {color: TintsColors.DarkGray}]}>Your Restrictions</Text>
            <Text style={[{ color: TintsColors.MidLightGray, textDecorationLine: 'underline'}, type.body1M]}>Edit</Text>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', ...spacing.vert3x }}>
          <DietaryPill
              style={[spacing.vert1x, { marginRight: 8 }]} // Apply vertical spacing
              size="large" // Specify the size: 'small' or 'large'
              type="active" // Specify the type: 'active' or 'inactive'
              dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
              text="Dairy" // Specify the text to display in the pill
              icon={DietaryIcons.DairySolid} // Pass the icon component or source if needed
              isActive={isActive} // Pass the isActive prop
            />
            
            <DietaryPill
              style={[spacing.vert1x, { marginRight: 8 }]} // Apply vertical spacing
              size="large" // Specify the size: 'small' or 'large'
              type="active" // Specify the type: 'active' or 'inactive'
              dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
              text="Sesame" // Specify the text to display in the pill
              icon={DietaryIcons.SesameSolid} // Pass the icon component or source if needed
              isActive={isActive} // Pass the isActive prop
            />

            <DietaryPill
              style={[spacing.vert1x, { marginRight: 8 }]} // Apply vertical spacing
              size="large" // Specify the size: 'small' or 'large'
              type="active" // Specify the type: 'active' or 'inactive'
              dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
              text="Tree Nut" // Specify the text to display in the pill
              icon={DietaryIcons.TreenutSolid} // Pass the icon component or source if needed
              isActive={isActive} // Pass the isActive prop
            />
          </View>

          

          <Text style={[type.heading3M, spacing.vert2x, {color: TintsColors.DarkGray}]}>Preferences</Text>

          <AccountPreferences iconName='heart-circle-outline' text='Your Favorited Restaurants' />
          <AccountPreferences iconName='chatbubbles-outline' text='Help Center' />
          <AccountPreferences iconName='settings-outline' text='Settings' />
        </View>

      </SafeAreaView>
    </ScrollView>
  );
}
