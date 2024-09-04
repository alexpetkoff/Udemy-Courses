import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoriesGridTile";

function renderCategoriesItem(itemData) {
    return <CategoriesGridTile title={itemData.item.title} color={itemData.item.color} />
}

function CategoriesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoriesItem} numColumns={2} />
}

export default CategoriesScreen;