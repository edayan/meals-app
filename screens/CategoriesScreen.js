import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = (props) => {
    console.log(props);

    return (
        <View style={styles.screen}>
            <Text>The category screen</Text>
            <Button title="Go to meals" onPress={() => {
                props.navigation.navigate('CategoryMeals')
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CategoriesScreen; 