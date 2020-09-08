import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import colors from '../constants/colors';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const SwitchFilter = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.text}</Text>
            <Switch
                value={props.switchValue}
                onValueChange={props.onValueSwitched}
                thumbColor={colors.primaryColor}
                trackColor={{true: colors.accentColor}}
            />
        </View>
    );
};

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => { //wrapper al functiei a.i functia sa fie cached de react si e rerendata doar daca se schimba dependencies
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]); //dependintele dupa care ne uitam sa se schimbe pt a se rerenda functia

    //tr sa isi faca load doar cand se schimba val lui save. Deci adaug un nou param, lista te dependencies
    useEffect(() => { //asa comunica componenta cu navigation options (cu setParams/getParams)
        navigation.setParams(//to update the params values for the currently loaded screen 
            {save: saveFilters}); 
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <SwitchFilter text='Gluten-Free' switchValue={isGlutenFree} onValueSwitched={newValue => setIsGlutenFree(newValue)}/>
            <SwitchFilter text='Lactose-Free' switchValue={isLactoseFree} onValueSwitched={newValue => setIsLactoseFree(newValue)}/>
            <SwitchFilter text='Vegan' switchValue={isVegan} onValueSwitched={newValue => setIsVegan(newValue)}/>
            <SwitchFilter text='Vegetarian' switchValue={isVegetarian} onValueSwitched={newValue => setIsVegetarian(newValue)}/>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Filter Meals',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Save"
              iconName="ios-save"
              onPress={navData.navigation.getParam('save')}
            />
        </HeaderButtons>
      ),
    };
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
      },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 25,
      },
});

export default FiltersScreen;