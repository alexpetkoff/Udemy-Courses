import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { Text } from "react-native";

function FavoriteScreen() {
    const favoriteMealsContext = useContext(FavoritesContext);
    const filteredMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id))


    return (
        filteredMeals.length > 0
            ? (<MealsList items={filteredMeals} />)
            : (<Text style={{ textAlign: 'center', marginTop: 12, fontSize: 16 }}>No favorite meals found. Start adding some!</Text>)
    )
}

export default FavoriteScreen;
