import { useLayoutEffect } from 'react';
import { MEALS } from "../data/dummy-data";
import MealsList from '../components/MealsList/MealsList';


function MealsOverviewScreen({ route, navigation }) {
    // Instead of passing route as a prop, we can use useRoute() hook to access those params.
    const { categoryId, categoryTitle, categoryColor } = route.params;

    const filteredMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId))

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
        <MealsList items={filteredMeals} />
    )

}

export default MealsOverviewScreen;

