import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
//in metoda navigate se ia parametrul identifier-ul (pointerul) screenului care tr incarcat


const CategoriesScreen = props => {
  //console.log(props);//obiectul navigate care are props: functii mostly printre care si navigate, getParam, goBack etc.
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          })
        }}
      />
    );
  }

    return (
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
      />
    );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories', //titlul
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gridItem: {
      flex: 1,
      margin: 15,
      height: 150,
    }
});

export default CategoriesScreen;