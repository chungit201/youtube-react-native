import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import {Image, Text, View} from "react-native";

//sidebar left navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{

        tabBarActiveTintColor: "#ea455e",
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        options={{tabBarIcon: ({color, size}) => <Icon color={color} name={"home"} size={20}/>}}
        name="Trang chủ"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarIcon: ({color, size}) => <Icon color={color} name={"heart"} size={20}/>}}
        name="Shorts"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarIcon: ({color, size}) => <Icon color={color} name={"circle"} size={20}/>}}
        name="Video"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarIcon: ({color, size}) => <Icon color={color} name={"bookmark"} size={20}/>}}
        name="Thư viện"
        component={CategoriesScreen}
      />
      <Tab.Screen
        options={{tabBarIcon: ({color, size}) => <Icon color={color} name={"user"} size={20}/>}}
        name={"Tài khoản"}
        component={CategoriesScreen}
      />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function HeaderLogo() {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
      <Image
        style={{width: 90, height: 25}}
        source={require('../../assets/icons/youtube.png')}
      />
    </View>
  );
}

function DrawerStack() {
  return (
    //drawer components ui

    // <Drawer.Navigator
    //   drawerPosition='left'
    //   initialRouteName='Main'
    //   drawerStyle={{
    //     width: 250
    //   }}
    //   screenOptions={{headerShown: false}}
    //   drawerContent={({navigation}) => <DrawerContainer navigation={navigation}/>}
    // >
    //   <Drawer.Screen name='Main' component={MainNavigator}/>
    // </Drawer.Navigator>

    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{headerTitle: () => <HeaderLogo/>}}

      />
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen}/>
      <Stack.Screen name='Ingredient' component={IngredientScreen}/>
      <Stack.Screen name='Search' component={SearchScreen}/>
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen}/>
    </Stack.Navigator>
  )
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
}

