import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const MealDetailScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The meal details screen</Text>
            <Button title="Got back to categories" onPress={() => {
                props.navigation.popToTop();
            }}/>
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