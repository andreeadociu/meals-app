import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen, //pointer la screen
    CategoryMeals: {
        screen: CategoryMealsScreen, //poti sa il setezi asa pt additional configurations dar inca nu e nevoie
    },
    MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigation); //wrap in createAppContainer
