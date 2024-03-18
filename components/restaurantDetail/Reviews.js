import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import GlobalStyles from '../../settings/styles/GlobalStyle'
import { type } from '../../settings/styles/Typography';
import { PrimaryColors, SecondaryColors, TintsColors } from '../../settings/styles/Colors';
import { color } from '@rneui/base';
import { spacing } from '../../settings/styles/Spacing';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

export default function Reviews(props) {
    console.log('Rendering Reviews component');
    
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Recommended Reviews</Text>

        <View style={styles.centeredContainer}>
          <Text style={styles.subtitle}>Excellent</Text>

          <View style={styles.starRow}>
            <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
            <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
            <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
            <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
            <Ionicons name="star-half" size={24} style={{ color: SecondaryColors.BrightYellow }} />
          </View>

          <Text style={styles.numberRating}>4.8 / 5.0</Text>
          <Text style={styles.caption}>Based on 1488 reviews</Text>

          <Image style={styles.image} source={require('../../assets/images/review-bar.jpg')} />
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: TintsColors.Platinum}}>
            <Image style={styles.avatar} source={require('../../assets/images/avatars/avt-3.png')}></Image>

            <View>
              <Text style={styles.label}>Jane D.</Text>
              <View style={styles.starRow}>
                <Ionicons name="star-outline" size={24} style={{ color: SecondaryColors.BrightYellow }} />
                <Ionicons name="star-outline" size={24} style={{ color: SecondaryColors.BrightYellow }} />
                <Ionicons name="star-outline" size={24} style={{ color: SecondaryColors.BrightYellow }} />
                <Ionicons name="star-outline" size={24} style={{ color: SecondaryColors.BrightYellow }} />
                <Ionicons name="star-outline" size={24} style={{ color: SecondaryColors.BrightYellow }} />
              </View>
              <Button title="Write a Review" buttonColor={PrimaryColors.Green} textColor='white' style={styles.button}>
                
                <Text style={styles.buttonText}>Write a Review</Text>
              </Button>
            </View>
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: TintsColors.Platinum}}>
            <Image style={styles.avatar} source={require('../../assets/images/avatars/avt-1.png')}></Image>

            <View style={{flexDirection: 'column'}}>
              <Text style={styles.label}>Clara H.</Text>
              <View style={styles.starRow}>
                <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
                <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
                <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
                <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
                <Ionicons name="star" size={24} style={{ color: SecondaryColors.BrightYellow }} />
              </View>

              <Text style={[type.body2S, {marginTop: 8}]}>The food was cooked to perfection. The {"\n"}waiter was very accommodating with my{"\n"} diet! :) </Text>

            </View>
        </View>


        
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
   container: {
    padding: 16,
    flex: 1,
   },
   
    title: {
      ...type.heading2L,
      color: TintsColors.DarkGray,
      ...spacing.vert1x,
    },

    subtitle: {
      ...type.heading3M,
      color: TintsColors.MidGray,
    },

    centeredContainer: {
      alignItems: 'center',
    },

    starRow: {
      flexDirection: 'row',
    },

    numberRating: {
      ...type.heading1XL,
      color: TintsColors.MidGray,
    },

    caption: {
      ...type.body1M,
      ...spacing.vert2x,
      color: TintsColors.MidGray,
    },

    image: {
      width:358,
      height: 128,
      ...spacing.vert4x
    },

    avatar: {
      width: 64,
      height: 64,
      marginRight: 16,
    },

    label: {
      ...type.heading5S,
      color: TintsColors.DarkGray,
      marginBottom: 4,
    },

    button: {
      borderRadius: 4,
      marginTop: 8,
    },

    buttonText: {
      ...type.heading5S,
      color: 'white'
    },
  });