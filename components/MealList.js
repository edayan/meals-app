import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem';
import { useSelector } from "react-redux";
const MealList = (props) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);


    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return <MealItem
            onSelectMeal={() => {
                props.navigation.navigate('MealDetail', {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title,
                    isFav: isFavorite,
                })
            }}
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability} />
    }

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


