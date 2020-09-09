import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
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
const FilterScreen = () => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

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