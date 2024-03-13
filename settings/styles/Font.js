import { View, Text } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { type } from './Typography'; // Import typography styles

export default function Font() {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Text-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    // Add other custom fonts if needed
  });

  if (!fontsLoaded) {
    // You can replace this with your loading indicator or component
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={type.heading1XL}>Heading 1 XL</Text>
      <Text style={type.body1M}>Body 1 M</Text>
      {/* Add more Text components with different styles as needed */}
    </View>
  );
}
