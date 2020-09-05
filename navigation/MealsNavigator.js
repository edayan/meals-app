import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealsDetailsScreen from '../screens/MealDetailScreen'


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealsDetailsScreen
})

export default createAppContainer(MealsNavigator);
