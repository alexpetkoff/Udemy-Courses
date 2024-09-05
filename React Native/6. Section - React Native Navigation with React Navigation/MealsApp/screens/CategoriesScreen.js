import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoriesGridTile";

function CategoriesScreen({ navigation }) {
    function renderCategoriesItem(itemData) {

        function pressHandler() {
            navigation.navigate('Overview', {
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title
            });
        }

        return <CategoriesGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    }

    return <FlatList contentContainerStyle={styles.list} data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoriesItem} numColumns={2} />
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    list: {
        paddingVertical: 15
    }
})