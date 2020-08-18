import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen!</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => {navigationData.toggleDrawer();}}
          />
        </HeaderButtons>
        ),
    }
  };

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default FiltersScreen;