import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

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
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favourite"
                iconName="ios-star"
                onPress={() => { }} />
        </HeaderButtons>
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