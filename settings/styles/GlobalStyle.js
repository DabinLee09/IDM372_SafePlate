import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { type } from './Typography'
import { TintsColors } from './Colors';
import { spacing } from './Spacing';


const GlobalStyles = StyleSheet.create({
  // grid defining left/right and top/bottom margins
  grid: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  radius1x: {
    borderRadius: 4,
  },

  radius3x: {
    borderRadius: 12,
  },

  radius25x: {
    borderRadius: 100
  },

  pageHeader: {
    ...type.heading2L,
    textAlign: 'center',
    color: TintsColors.DarkGray,
    ...spacing.vert4x,
  },

  // button styles
  // apply ctaSbold for S, M, L btns
  // btnSprimary: {
  //   display: 'flex',
  //   paddingVertical: 6,
  //   paddingHorizontal: 16,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 4,

  //   backgroundColor: '#39735D',
  // },

  // btnSsecondary: {
  //   display: 'flex',
  //   paddingVertical: 6,
  //   paddingHorizontal: 16,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 4,
    
  //   backgroundColor: 'white',
  //   borderWidth: 1,
  //   borderColor: '#39735D',
  // },

  // btnMprimaryRound: {
  //   display: 'flex',
  //   paddingVertical: 8,
  //   paddingHorizontal: 24,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 100,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 4,

  //   backgroundColor: '#39735D',
  // },

  // btnMsecondaryRound: {
  //   display: 'flex',
  //   paddingVertical: 8,
  //   paddingHorizontal: 24,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 100,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 4,
    
  //   backgroundColor: 'white',
  //   borderWidth: 1,
  //   borderColor: '#39735D',
  // },

  // btnMprimary: {
  //   display: 'flex',
  //   paddingVertical: 8,
  //   paddingHorizontal: 24,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 4,

  //   backgroundColor: '#39735D',
  // },

  // btnMsecondary: {
  //   display: 'flex',
  //   paddingVertical: 8,
  //   paddingHorizontal: 24,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 4,
    
  //   backgroundColor: 'white',
  //   borderWidth: 1,
  //   borderColor: '#39735D',
  // },

  // btnLprimary: {
  //   display: 'flex',
  //   paddingVertical: 10,
  //   paddingHorizontal: 24,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 4,

  //   backgroundColor: '#39735D',
  // },

  // btnLsecondary: {
  //   display: 'flex',
  //   paddingVertical: 10,
  //   paddingHorizontal: 24,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 4,
    
  //   backgroundColor: 'white',
  //   borderWidth: 1,
  //   borderColor: '#39735D',
  // },
});

export default GlobalStyles;