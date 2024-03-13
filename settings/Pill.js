import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryColors, TintsColors } from './styles/Colors';
import GlobalStyles from './styles/GlobalStyle';
import { type as Typography } from './styles/Typography';

const Pill = ({ size = 'small', type = 'active', dietaryType = 'allergy', text, icon: IconComponent, style }) => {
    const primaryColor = dietaryType === 'allergy' ? PrimaryColors.Green : PrimaryColors.Blue;
    const isActive = type === 'active';

    const textColor = isActive ? TintsColors.White : primaryColor;
    const borderColor = type === 'inactive' ? primaryColor : 'transparent';
  
    const paddingVertical = size === 'large' ? 9 : 5;
    const paddingHorizontal = size === 'large' ? 16 : 8;

    const textStyle = size === 'large' ? Typography.body4L : Typography.body2S;
  
    const pillStyles = StyleSheet.create({
      pill: {
        ...GlobalStyles.radius25x,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        backgroundColor: type === 'active' ? primaryColor : TintsColors.White,
        borderWidth: type === 'inactive' ? 1 : 0,
        borderColor: borderColor,
        flexDirection: 'row',
        alignItems: 'center',
      },
      text: {
        ...textStyle,
        color: textColor,
        marginLeft: 4,
      },
    });
  
    return (
      <View style={[pillStyles.pill, style]}>
        {IconComponent && (
          <View>
            <IconComponent isActive={isActive} width={20} height={20} />
          </View>
        )}
        <Text style={pillStyles.text}>{text}</Text>
      </View>
    );
};

export default Pill;