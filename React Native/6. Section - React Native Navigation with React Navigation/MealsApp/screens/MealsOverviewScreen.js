import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {

    const categoryId = route.params.categoryId;
    const categoryTitle = route.params.categoryTitle;

    return <View style={styles.container}>
        <Text>{categoryId} - Meals Overview Screen - {categoryTitle}</Text>
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})