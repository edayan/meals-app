import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';



const FavouritesScreen = (props) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

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



export default FavouritesScreen