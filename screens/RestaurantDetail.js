// import { View, Text, ScrollView } from 'react-native'
// import React from 'react'
// import About from '../components/restaurantDetail/About'

// import { TabView, TabBar } from 'react-native-tab-view';
// import MenuItems from '../components/restaurantDetail/MenuItems'
// import Info from '../components/restaurantDetail/Info';
// import Reviews from '../components/restaurantDetail/Reviews'

// export default function RestaurantDetail({ route }) {
//   return (
//     <ScrollView style={{ backgroundColor: 'white' }} >
//       <About route={route} />
//     </ScrollView>
//   )
// }

import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import About from '../components/restaurantDetail/About';
import { TabView, TabBar } from 'react-native-tab-view';
import MenuItems from '../components/restaurantDetail/MenuItems';
import Info from '../components/restaurantDetail/Info';
import Reviews from '../components/restaurantDetail/ReviewsTest';
import { PrimaryColors, TintsColors } from '../settings/styles/Colors'; // Assuming you have defined your color constants
import { type } from '../settings/styles/Typography'; // Assuming you have defined your typography styles

export default function RestaurantDetail({ route }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'menuItems', title: 'Menu Items' },
    { key: 'info', title: 'Info' },
    { key: 'reviews', title: 'Reviews' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'menuItems':
        return <MenuItems />;
      case 'info':
        return <Info />;
      case 'reviews':
        return <Reviews/>;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: PrimaryColors.Green }}
      style={{ backgroundColor: 'white', marginHorizontal: 16, borderBottomWidth: 1, borderBottomColor: TintsColors.Platinum }}
      tabStyle={{ flex: 1 }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? PrimaryColors.Green : TintsColors.MidLightGray, ...type.heading4M }}>{route.title}</Text>
      )}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* <About route={route} /> */}

        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}