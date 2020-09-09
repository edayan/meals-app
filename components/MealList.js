import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem';

const MealList = (props) => {

    const renderMealItem = itemData => <MealItem
        onSelectMeal={() => {
            props.navigation.navigate('MealDetail', {
                mealId: itemData.item.id,
                mealTitle: itemData.item.title
            })
        }}
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability} />

    return (
        <View style={styles.list}>
            <FlatList data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MealList


