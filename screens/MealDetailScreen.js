import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The meal details screen</Text>
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

export default MealDetailScreen