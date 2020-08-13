import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import colors from '../constants/colors';

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
    {defaultNavigationOptions: { //gets merged cu ce navigationOptions gaseste in screenurile de mai sus
        headerStyle: { //stilul headerului
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : colors.accentColor,
        },
        headerTintColor: 'white', //culoarea titlului
        headerTitle: 'Screen',
    }},
);

export default createAppContainer(MealsNavigation); //wrap in createAppContainer
