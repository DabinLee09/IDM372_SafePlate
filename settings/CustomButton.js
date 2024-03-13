import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { PrimaryColors, TintsColors } from './styles/Colors';
import GlobalStyles from './styles/GlobalStyle';
import {type as Typography } from './styles/Typography';

const CustomButton = ({ size = 'small', active = true, text, onPress, style }) => {
    const primaryColor = PrimaryColors.Green; // Active button fill color
    const inactiveBorderColor = PrimaryColors.Green; // Inactive button border color
    const textColor = active ? TintsColors.White : PrimaryColors.Green; // Text color

    const paddingHorizontal = size === 'large' ? 24 : (size === 'medium' ? 24 : 16);
    const paddingVertical = size === 'large' ? 10 : (size === 'medium' ? 8 : 6);

    const buttonStyles = StyleSheet.create({
        button: {
            ...GlobalStyles.radius1x,
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
            backgroundColor: active ? primaryColor : TintsColors.White,
            borderWidth: active ? 0 : 1, // No border for active, 1px border for inactive
            borderColor: active ? 'transparent' : inactiveBorderColor,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            ...Typography.heading5S,
            color: textColor,
        },
    });

    return (
        <Pressable
            style={buttonStyles.button}
            onPress={onPress}
        >
            <Text style={buttonStyles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;