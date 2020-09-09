import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FilterScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The filter screen</Text>
        </View>
    )
}

FilterScreen.navigationOptions = {
    headerTitle: 'Filter Meals',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default FilterScreen