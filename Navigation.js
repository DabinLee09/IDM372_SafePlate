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
import { PrimaryColors } from './settings/styles/Colors';
import RestaurantList from './screens/RestaurantList';
import { DataProvider } from './components/DataContext';

import CuratedGuide from './screens/CuratedGuide';
import FilterBtn from './components/searchTab/FilterBtn';
import FilterBtnTab from './components/searchTab/FilterBtnTab';


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
      headerShown: false,
      tabBarLabelStyle: {fontSize: 16, textTransform: "none"},
      tabBarActiveTintColor: "#53A385",
      tabBarInactiveTintColor: "#7E7E7E",
      tabBarIndicatorStyle: { 
        height: 3, 
        borderRadius: 4, 
        marginHorizontal: 60,
        width: 80, 
        backgroundColor: "#53A385",
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
    <HomeStack.Navigator screenOptions={{ 
      headerStyle: {  height: 60,} }}>
      <HomeStack.Group>
        <HomeStack.Screen name='Home' component={Home} options={{ headerTitle: '',  headerShadowVisible: false,}}  />
        <HomeStack.Screen name='RestaurantDetail' component={RestaurantDetail} initialParams={{ navigation,}} options={{ headerTitle: '', headerBackTitle: ' ', headerTintColor: '#343434',  headerShadowVisible: false, }}/>
        <HomeStack.Screen name="CuratedGuide" component={CuratedGuide} options={{ headerTitle: '', headerBackTitle: ' ', headerTintColor: '#343434',  headerShadowVisible: false, }} />
        <HomeStack.Screen name='SearchTabDefault' component={SearchTabDefault} initialParams={{ navigation,}}/>
        <HomeStack.Screen name='RestaurantList' component={RestaurantList} initialParams={{ navigation,}} options={{ headerTitle: '', headerBackTitle: ' ', headerTintColor: '#343434',  headerShadowVisible: false, }} />
      </HomeStack.Group>
      
      <HomeStack.Group screenOptions={{ presentation: 'modal' }} >
        <HomeStack.Screen name='SearchTabGroup' component={SearchTabGroup} options={{ headerTitle: '', headerBackTitle: ' ', headerTintColor: '#343434', headerRight: ()=><FilterBtnTab/>, headerShadowVisible: false, }} initialParams={{ 
          headerShown: false,
          tabBarLabel: "Explore",
          tabBarButton: () => (
            <TouchableOpacity onPress={() => navigation.setOptions({ jumpTo: 'SearchTabGroup' })}>
              {/* btn content */}
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
                    iconName = focused ? "account-supervisor-circle" : "account-supervisor-circle-outline";
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
            tabBarInactiveTintColor: "gray"
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
            <Tab.Screen name="Buddies" component={Buddies} options={{ headerShown: false, }} />
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false, }} />
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