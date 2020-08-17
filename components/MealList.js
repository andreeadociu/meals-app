import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from './MealItem';

const MealList = props => {
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
          data={props.listData}
          keyExtractor={item => item.id}
          style={{width: '100%'}}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default MealList;