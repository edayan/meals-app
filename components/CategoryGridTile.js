import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onSelect}
            style={styles.gridItem}>
            <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    title: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 22,
        textAlign: 'right'
    }
})
