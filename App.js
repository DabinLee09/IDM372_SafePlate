import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import StyleTest from './screens/StyleTest';
import { useFonts } from 'expo-font';
import LogIn from './screens/LogIn';
import Filter from './components/searchTab/Filter';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Text-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Medium': require('./assets/fonts/SF-Pro-Text-Medium.otf'),
    'SF-Pro-Text-LightItalic': require('./assets/fonts/SF-Pro-Text-LightItalic.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    < Navigation />
    // <StyleTest />
    // <LogIn />
    // <Filter />

  );
}

