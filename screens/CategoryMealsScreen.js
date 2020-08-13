import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import colors from '../constants/colors';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId'); //extrage un param la navigare din screenul anterior
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

    return (
        <View style={styles.screen}>
          <Text>The Category Meals Screen</Text>
          <Button title={"Go to Details"} onPress={() => {props.navigation.navigate('MealDetail')}}/>
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