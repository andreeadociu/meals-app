import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId'); //extrage un param la navigare din screenul anterior
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0) //adica daca mealul are catId respectiv

//ii pot transfera componentei navigation param pentru ca aici exista (e screen)
    return (
       <MealList
         listData={displayedMeals}
         navigation={props.navigation}
       />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);
    return {
        headerTitle: selectedCategory.title,
    };
};

export default CategoryMealsScreen;