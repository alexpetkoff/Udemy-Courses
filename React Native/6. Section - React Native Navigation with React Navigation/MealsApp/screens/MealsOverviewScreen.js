import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS } from "../data/dummy-data";
import MealCard from '../components/MealCard';


function MealsOverviewScreen({ route, navigation }) {
    // Instead of passing route as a prop, we can use useRoute() hook to access those params.
    const { categoryId, categoryTitle, categoryColor } = route.params;

    const filteredMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId))

    const renderMealCards = (itemData) => {
        return <MealCard
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
            categoryColor={categoryColor}
        />
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
            headerStyle: {
                backgroundColor: categoryColor
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        })
    }, [navigation, categoryTitle, categoryColor])


    return (
        <View style={styles.container}>
            <FlatList
                data={filteredMeals}
                renderItem={renderMealCards}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    }

    , title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})