import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Screens
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import Buddies from './screens/Buddies';
import Account from './screens/Account';
import SearchTabDefault from './screens/SearchTabDefault';
import SearchTabType from './screens/SearchTabType';
import { PrimaryColors, SecondaryColors, TintsColors } from './settings/styles/Colors';
import RestaurantList from './screens/RestaurantList';
import { DataProvider } from './components/DataContext';


//SearchTab
const SearchTab = createMaterialTopTabNavigator();

function SearchTabGroup({ route, navigation }){
  React.useEffect(() => {
    if (route.params?.jumpTo) {
      console.log('Jumping to:', route.params.jumpTo);
    }
  }, [route.params?.jumpTo]);

  return(
    <SearchTab.Navigator screenOptions={{
      tabBarLabelStyle: {fontSize: 16, textTransform: "none"},
      tabBarActiveTintColor: PrimaryColors.Green,
      tabBarInactiveTintColor: TintsColors.MidLightGray,
      tabBarIndicatorStyle: { 
        height: 3, 
        borderRadius: 4, 
        marginHorizontal: 60,
        width: 80, 
        backgroundColor: PrimaryColors.Green,
      } ,
    }}>
      <SearchTab.Screen name="Default Search" component={SearchTabDefault} />
      <SearchTab.Screen name="Type Search" component={SearchTabType} />
    </SearchTab.Navigator>
  )
}







//stackNavigator restaurantDetail -> RestaurantDetail 
const HomeStack = createStackNavigator();

function HomeStackGroup({navigation, route}) {
  return(
    // <HomeStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen name='Home' component={Home} />
        <HomeStack.Screen name='RestaurantDetail' component={RestaurantDetail} initialParams={{ navigation,}}/>
        <HomeStack.Screen name='SearchTabDefault' component={SearchTabDefault} initialParams={{ navigation,}}/>
        <HomeStack.Screen name='RestaurantList' component={RestaurantList} initialParams={{ navigation,}} />
      </HomeStack.Group>
      
      <HomeStack.Group screenOptions={{ presentation: 'modal' }} >
        <HomeStack.Screen name='SearchTabGroup' component={SearchTabGroup} initialParams={{ 
          headerShown: false,
          tabBarLabel: "Explore",
          tabBarButton: () => (
            <TouchableOpacity onPress={() => navigation.setOptions({ jumpTo: 'SearchTabGroup' })}>
              {/* 버튼 내용 */}
            </TouchableOpacity>
          ),
         }} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}



//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup({ navigation, route }) {
    return (
        <Tab.Navigator
        screenOptions={({route,}) => ({
            tabBarIcon: ({color, focused, size}) => {
                let iconName;
                if (route.name === "HomeStackGroup"){
                    iconName = focused ? "compass" : "compass-outline";
                } else if (route.name === "Buddies"){
                    iconName = focused ? "account-supervisor" : "account-supervisor-outline";
                } else if (route.name === "Account"){
                    iconName = focused ? "account-circle" : "account-circle-outline";
                }
                return <MaterialCommunityIcons 
                name={iconName} 
                color={color}
                size={size} style={{
                  // marginBottom: 3,
                  // alignSelf: "center"
                }}/>
                // <Ionicons name={iconName} size={size} color={color}/>
                
            },
            tabBarActiveTintColor: PrimaryColors.Green,
            tabBarInactiveTintColor: TintsColors.MidLightGray
        })}
        >
            
            <Tab.Screen name="HomeStackGroup" component={HomeStackGroup} 
                options={{ headerShown: false, tabBarLabel: "Explore"}}
                initialParams={{ navigation, route }}
            // options={{
            //     tabBarIcon: () => <Feather name="home" size={24} color="black" /> 
            // }}
            />
            {/* <Tab.Screen name="Home" component={Home}/> */}
            <Tab.Screen name="Buddies" component={Buddies}/>
            <Tab.Screen name="Account" component={Account}/>
        </Tab.Navigator>
    )
}









export default function Navigation() {
  return (
    <DataProvider>
      <NavigationContainer>
          <TabGroup />
          {/* <RootNavigator/> */}
      </NavigationContainer>
    </DataProvider>
  )
}