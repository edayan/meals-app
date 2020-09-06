import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = (props) => {


    const renderGridItem = dataItem => <CategoryGridTile
        title={dataItem.item.title}
        color={dataItem.item.color}
        onSelect={() => {
            props.navigation.navigate('CategoryMeals', {
                'categoryId': dataItem.item.id
            })
        }} />


    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CategoriesScreen; 