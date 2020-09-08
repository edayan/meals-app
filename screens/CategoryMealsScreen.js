import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoryMealsScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text>The category meals screen:</Text>
            <FlatList data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategory.title,
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


export default CategoryMealsScreen;