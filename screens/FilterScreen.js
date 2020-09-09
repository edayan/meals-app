import React, { useCallback, useEffect, useState } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.value} onValueChange={props.onChange} />
        </View>
    )
}

const FilterScreen = (props) => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log('appliedFilters', appliedFilters)
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        // setting params to navigation data, so that props/states of component can be accessed from navigation options
        navigation.setParams({ save: saveFilters })
    }, [saveFilters]);


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters /Restrictions</Text>
            <FilterSwitch label="Gluten-Free" value={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
            <FilterSwitch label="Lactose-Free" value={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
            <FilterSwitch label="Vegan-Free" value={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
            <FilterSwitch label="Vegetarian" value={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />
        </View>
    )
}

FilterScreen.navigationOptions = navData => {

    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Save" iconName="ios-save" onPress={() => {
                console.log('saving filters');
                navData.navigation.getParam('save')();

            }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignContent: 'center',
        marginVertical: 10
    }
})

export default FilterScreen