import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText'


const FavouritesScreen = (props) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    if (favoriteMeals.length === 0 || !favoriteMeals) {
        return (<View style={styles.content}>
            <DefaultText>You have no favorite meals!</DefaultText>
        </View>)
    }

    return (
        <MealList listData={favoriteMeals} navigation={props.navigation} />
    )
}

FavouritesScreen.navigationOptions = navData => {

    return {
        headerTitle: 'Your Favourites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    }

};


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouritesScreen