import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return (
        <View style={styles.screen}>
            <Text>The category meals screen:</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="See mail details" onPress={() => {
                props.navigation.push('MealDetail')
            }} />

            <Button title="Go back" onPress={() => {
                props.navigation.goBack()
            }} />
        </View>
    )
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