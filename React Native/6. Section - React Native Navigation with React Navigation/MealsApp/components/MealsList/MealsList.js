import { CATEGORIES } from "../../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native"
import MealCard from "../MealsList/MealCard";

function MealsList({ items }) {
    const filteredMeals = items

    const renderMealCards = (itemData) => {

        const categoryColor = CATEGORIES.find(cat => cat.id === itemData.item.categoryIds[0]).color

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
export default MealsList;

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