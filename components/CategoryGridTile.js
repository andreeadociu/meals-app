import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import colors from '../constants/colors';
import { color } from 'react-native-reanimated';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
 
const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21 ) { //adica e TouchableWithoutFeedback supported
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
      <View style={styles.gridItem}>
        <TouchableCmp 
            style={{flex: 1}}
            onPress={props.onSelect}
        >
            <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableCmp>
      </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10, //pt android
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 
          'hidden' : 'visible', //pt android; visible e default
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 5, //pt android
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
       // fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
    }
});

export default CategoryGridTile;