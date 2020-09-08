import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>The meal details screen: meal detail{JSON.stringify(selectedMeal, 4)}</Text>
            <Button title="Got back to categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title
    }

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MealDetailScreen