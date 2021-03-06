import React from 'react';
import { Text, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const defaultOptions = {
    headerStyle: { //stilul headerului
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : colors.accentColor,
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: { //se refera la butonul de back din header
        fontFamily: 'open-sans',
    },
    headerTintColor: 'white', //culoarea titlului
    headerTitle: 'Screen',
};

//screen-urile sunt vazute ca o stiva de pagini. Cea de sus e cea vazuta prima (ca main screen/home)
const MealsNavigation = createStackNavigator({
    Categories: {
        screen: CategoriesScreen, //pointer la screen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen, //poti sa il setezi asa pt additional configurations dar inca nu e nevoie
    },
    MealDetail: MealDetailScreen,
},
    {defaultNavigationOptions: //gets merged cu ce navigationOptions gaseste in screenurile de mai sus
        defaultOptions,
    },
);

const FavNavigation = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultOptions,
    }
);

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
}, {
    // navigationOptions: {
    //     drawer: 'Filters!',
    // },
    defaultNavigationOptions: defaultOptions,
});

const tabScreenConfig =
    {
        Meals: {screen: MealsNavigation, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: 'white', //doar pe android
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}></Text> : 'Meals!', //pot folosi si o comp si un string
        }}, //adica pointeaza catre const de mai sus
        Favorites: {screen: FavNavigation, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: 'white', //doar pe android
            tabBarLabel: 'Favorites!', //poate sa nu existe si atunci by default o sa fie numele pointerului (Favorites)
        }},
        Filters: {screen: FiltersNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-menu' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: 'white', //doar pe android
        }},
    };

//primeste un obiect unde tr sa aiba info despre diferite taps, screens you want to load 
const MealsFavTabNavigation =
    Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig,
        { activeTintColor: colors.accentColor,
          shifting: true,
          barStyle: {
              backgroundColor: colors.primaryColor,
          },
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans-bold',
          },
          activeTintColor: colors.accentColor, //culoarea de la Ionicons vine de aici
        },
    });

export default createAppContainer(MealsFavTabNavigation); //wrap in createAppContainer
//se schimba exportul pentru ca acum MealsNavigation e nested in MealsFavTabNavigator, deci e de ajuns