import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const renderMealItem = (itemData) => {
        return <MealItem 
        // title={itemData.item.title}
        // duration = {itemData.item.duration} 
        {...itemData.item}
        onSelectMeal={()=>{

        }}/>
    };


    //получаю аргумент, отправленный через params в navigate
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                style={{width: '80%'}} />
        </View>
    );
};
//ставить опшинсы можно и через функцию, если тайтл нужно меня походу исполнения программы
CategoryMealsScreen.navigationOptions = (navigationData) => {
    //получаю аргумент, отправленный через params в navigate
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryMealsScreen;