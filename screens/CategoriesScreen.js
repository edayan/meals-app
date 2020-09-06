import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = (props) => {


    const renderGridItem = dataItem => {
        return (
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('CategoryMeals', {
                        'categoryId': dataItem.item.id
                    })
                }}
                style={styles.gridItem}>
                <View  >
                    <Text>{dataItem.item.title}</Text>
                </View>
            </TouchableOpacity>

        );
    }


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
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
})

export default CategoriesScreen; 