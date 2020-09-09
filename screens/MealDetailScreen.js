import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}
const MealDetailScreen = (props) => {
    const { navigation } = props;
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);


    // useEffect(() => {
    //     navigation.setParams({ mealTitle: selectedMeal.title });
    // }, [selectedMeal]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration} m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient =>
                <ListItem key={ingredient}>{ingredient}</ListItem>)}

            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step =>
                <ListItem key={step}>{step}</ListItem>)}

        </ScrollView>

    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favourite"
                iconName="ios-star"
                onPress={() => { }} />
        </HeaderButtons>
    }

}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: 'green',
        borderLeftWidth: 2,
        padding: 10
    }
})

export default MealDetailScreen