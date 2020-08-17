import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
              <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1} ellipsizeMode={"tail"}>
                     {props.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
              <Text>{props.duration}</Text>
              <Text>{props.complexity}</Text>
              <Text>{props.affordability}</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        //fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    }
});

export default MealItem;