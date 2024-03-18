// In Reviews.js
import React from 'react';
import { ScrollView, Text } from 'react-native';
import GlobalStyles from '../../settings/styles/GlobalStyle';

export default function Reviews() {
  console.log('Rendering Reviews component');

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text>Reviews Placeholder</Text>
    </ScrollView>
  );
}
