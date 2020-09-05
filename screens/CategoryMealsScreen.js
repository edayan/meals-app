import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The category meals screen</Text>
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