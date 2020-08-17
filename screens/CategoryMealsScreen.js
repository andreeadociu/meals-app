import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId'); //extrage un param la navigare din screenul anterior
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0) //adica daca mealul are catId respectiv

    const renderMealItem = itemData => {
        return (
            <MealItem
               title={itemData.item.title}
               duration={itemData.item.duration}
               complexity={itemData.item.complexity.toUpperCase()}
               affordability={itemData.item.affordability.toUpperCase()}
               image={itemData.item.imageUrl}
               onSelectMeal={() => {
                   props.navigation.navigate(
                       {routeName: 'MealDetail',
                        params: {
                           mealId: itemData.item.id}
                        },
                   )
               }}
            />
        );
    };

    return (
        <View style={styles.screen}>
          <FlatList
            renderItem={renderMealItem}
            data={displayedMeals}
            keyExtractor={item => item.id}
            style={{width: '100%'}}
          />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);
    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default CategoryMealsScreen;