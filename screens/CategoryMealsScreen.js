import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoryMealsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The category meals screen</Text>
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