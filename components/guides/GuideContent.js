import React from 'react';
import { Image, Linking, View, StyleSheet, Text } from 'react-native';
import { type } from '../../settings/styles/Typography';
import { Ionicons } from '@expo/vector-icons';
import { spacing } from '../../settings/styles/Spacing';
import { PrimaryColors, SecondaryColors, TintsColors } from '../../settings/styles/Colors';
import GlobalStyles from '../../settings/styles/GlobalStyle';

export const AllergyGuide = ({ title, colorText, imageSource, colorBack, restrictionPlural, restriction, freeOf, understandingRestriction, ingredient1, ingredient2, ingredient3, ingredient4, riskTitle1, riskBody1, riskTitle2, riskBody2, riskTitle3, riskBody3, riskTitle4, riskBody4, foodImage1, foodImage2, foodImage3, foodImage4, foodImage5, Link }) => {
  return (
    
    <View>
      {/* Cover image block for guide */}
      <View style={[styles.container, { backgroundColor: colorBack }]}>
          <View style={styles.textColumn}>
              <Ionicons name="arrow-back" size={24} color={colorBack} style={spacing.vert1x}/>
              <Text style={[type.heading5S, spacing.vert1x, { color: colorText }]}>Curated Guides by SafePlate</Text>
              <Text style={[type.heading1XL, spacing.vert1x, { color: colorText }]}>{title} Friendly</Text>
              <Text style={[type.body2S, { color: colorText }]}>Feb 2024</Text>
          </View>

        <View style={styles.imageColumn}>
          <Image
              source={imageSource} 
              style={styles.image}
              resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.page}>
        {/* The SafePlate Approach */}
          <Text style={styles.title}>The SafePlate Approach</Text>
          <Text style={[styles.body, styles.break1]}>When you encounter any of these icons in the SafePlate app, it means:</Text>
          <Text style={styles.body}> - The menu item is <Text style={type.heading3M}>free of {restrictionPlural}</Text> including {freeOf}</Text>
          <Text style={styles.body}> - The restaurant offers one or more menu items designated as {restriction}-free</Text>
          <Text style={[styles.body, styles.break2]}> - A person has a {restriction} allergy</Text>
        
        {/* Understanding a {title} Allergy */}
        <Text style={styles.title}>Understanding a {title} Allergy</Text>
        <Text style={[styles.body, styles.break2]}>{understandingRestriction}</Text>

        <Image source={foodImage1} style={styles.foodImage}/>
        <View style={styles.divider} />

        {/* Caution Zone: What to Avoid */}
        <Text style={[styles.title, {color:SecondaryColors.Red}]}>Caution Zone: What to Avoid</Text>
        <Text style={styles.body}> Here are some of the <Text style={type.heading3M}>most common ingredients </Text>that you should look out for:</Text>
        <Text style={styles.body}>- {ingredient1}</Text>
        <Text style={styles.body}>- {ingredient2}</Text>
        <Text style={styles.body}>- {ingredient3}</Text>
        <Text style={[styles.body, styles.break2]}>- {ingredient4}</Text>

        <Text style={[styles.body, styles.break1]}> Here are some of the <Text style={type.heading3M}>highest-risk foods </Text>that you should look out for:</Text>
        <Text style={styles.numberedItem}>1. {riskTitle1}</Text>
        <Text style={[styles.body, styles.break2]}> {riskBody1}</Text>
        <Image source={foodImage2} style={[styles.foodImage, styles.break2]}/>

        <Text style={styles.numberedItem}>2. {riskTitle2}</Text>
        <Text style={[styles.body, styles.break2]}> {riskBody2}</Text>
        <Image source={foodImage3} style={[styles.foodImage, styles.break2]}/>

        <Text style={styles.numberedItem}>3. {riskTitle3}</Text>
        <Text style={[styles.body, styles.break2]}> {riskBody3}</Text>
        <Image source={foodImage4} style={[styles.foodImage, styles.break2]}/>

        <Text style={styles.numberedItem}>4. {riskTitle4}</Text>
        <Text style={[styles.body, styles.break2]}> {riskBody4}</Text>
        <Image source={foodImage5} style={[styles.foodImage]}/>

        <View style={styles.divider} />
        {/* Tips for Stress-Free Dining */}
        <Text style={styles.title}>Tips for Stress-Free Dining</Text>
        <Text style={styles.numberedItem}>1. Menu Navigation</Text>
        <Text style={[styles.body, styles.break2]}>If you don't find a menu for a specific restaurant in our app, do not fear! You can still conduct an independent search for allergy-friendly menus or look for menu items marked with allergen symbols.</Text>

        <Text style={styles.numberedItem}>2. Communication is Key</Text>
        <Text style={[styles.body, styles.break2]}>Engage with your server, sharing details about the severity of your allergy and kindly inquiring about the kitchen’s preparation methods.</Text>
        
        <Text style={styles.numberedItem}>3. Cross-Contamination Awareness</Text>
        <Text style={styles.body}>Stay vigilant about potential sources of cross-contamination, like shared fryers or utensils. Don't hesitate to ask the kitchen about their practices for allergen separation.</Text>

        <View style={styles.divider} />
        {/* Recognizing and Responding to a Reaction */}
        <Text style={styles.title}>Recognizing and Responding to a Reaction</Text>
        <Text style={[styles.body, styles.break1]}>Knowing how to spot symptoms and respond swiftly is critical in managing food allergies.</Text>
        
        <Text style={[styles.body, styles.break1]}> If <Text style={type.heading3M}>two mild symptoms or one severe symptom </Text>occur:</Text>
        <Text style={styles.body}>-Administer epinephrine immediately</Text>
        <Text style={styles.body}>-Promptly call 911 and inform them that the person is having anaphylaxis and may need epinephrine upon emergency responders’ arrival</Text>
        <Text style={[styles.body, styles.break2]}>-Transport to the ER, even if symptoms improve</Text>

        <Text style={[styles.body, styles.break1]}> For <Text style={type.heading3M}>mild symptoms in one area: </Text></Text>
        <Text style={styles.body}>-Consider antihistamines if prescribed</Text>
        <Text style={styles.body}>-Stay with the person and notify emergency contacts</Text>
        <Text style={[styles.body]}>-Monitor closely for changes and administer epinephrine if symptoms worsen</Text>

        <View style={styles.divider} />
        {/* Recognizing and Responding to a Reaction */}
        <Text style={styles.title}>Ready, Set, Dine–{title}-Free!</Text>
        <Text style={[styles.body, styles.break2]}>Look for the "no {restrictionPlural}" symbol or "{restriction}-free" label as you explore the restaurants and menus in our app. Happy dining! </Text>

        <Text style={[styles.body, styles.break1]}>The information in this guide is sourced from FARE (Food Allergy Research & Education) at</Text>
        <Text style={[styles.body, styles.link]} onPress={() => Linking.openURL('{Link}')}>- {Link}</Text>
        <Text style={[styles.body, styles.link]} onPress={() => Linking.openURL('https://www.foodallergy.org/resources/recognizing-and-responding-reaction')}>- https://www.foodallergy.org/resources/recognizing-and-responding-reaction</Text>
      </View>

    </View>
  );
};

export const DietGuide = ({ title}) => {
  return (
    <View></View>
  )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 24
    },
    
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 232,
        overflow: 'hidden',
        ...spacing.vert2x,
      },
    
    textColumn: {
      flex: 2,
      flexDirection: 'column',
      paddingLeft: 16,
      paddingVertical: 8,
    },

    imageColumn: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',      
      position: 'relative',
    },
  
    image: {
      position: 'absolute',
      bottom: -24,
      right: -48,
      aspectRatio: 1,
      width:'auto',
      height: '100%',
      maxWidth:'100%'
    },

    title: {
      ...type.heading2L,
      ...spacing.vert1x, 
      color: TintsColors.DarkGray,
    },

    body: {
      ...type.body1M,
      color: TintsColors.DarkGray
    },
    
    break2: {
      ...spacing.vert2x
    },

    break1: {
      ...spacing.vert1x
    },

    divider: {
      borderBottomWidth: 1, 
      borderColor: TintsColors.Platinum, 
      paddingBottom: 16,
      marginVertical: 24,
    },

    numberedItem: {
    ...type.heading3M
    },

    foodImage: {
      height: 264,
      width:'100%',
      ...GlobalStyles.radius1x
    },

    link: {
      textDecorationLine: 'underline'
    }

  });  