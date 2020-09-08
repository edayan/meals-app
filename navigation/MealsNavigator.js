import React from 'react'
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailsScreen from '../screens/MealDetailScreen';
import FavouriteScreen from '../screens/FavouritesScreen'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealsDetailsScreen
}, {
    // initialRouteName: 'MealDetail', // incase want to load MealDetail first.
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})

const MealsFavNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Fav: {

        screen: FavouriteScreen,
        navigationOptions: {
            tabBarLabel: 'Favourites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            }
        }
    }

}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});


export default createAppContainer(MealsFavNavigator);
