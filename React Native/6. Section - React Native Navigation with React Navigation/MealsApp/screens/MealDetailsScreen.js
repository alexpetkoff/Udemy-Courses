import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from "../data/dummy-data";
import CustomButton from '../components/CustomButton';

function MealDetailsScreen({ route, navigation }) {
    const favoriteMealsContext = useContext(FavoritesContext);

    const { mealID, categoryColor } = route.params;

    const selectedMeal = MEALS.filter((meal) => {
        return meal.id === mealID
    })

    const isFavorite = favoriteMealsContext.ids.includes(mealID);
    const buttonToRender = isFavorite ? 'star' : 'star-outline';

    function starPressHandler() {
        buttonToRender === 'star' ? favoriteMealsContext.removeFavorite(mealID) : favoriteMealsContext.addFavorite(mealID)

        navigation.navigate('Favorites');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Description',
            headerStyle: {
                backgroundColor: categoryColor
            },
            headerRight: () => {
                return <CustomButton
                    color={'black'}
                    title={buttonToRender}
                    onPress={starPressHandler}
                />
            }
        })
    }, [navigation, categoryColor, isFavorite, buttonToRender, starPressHandler]);

    return (
        <ScrollView
            bouncesZoom={true}
            style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: selectedMeal[0].imageUrl }} style={styles.imageStyles} />
            </View>
            <View>
                <Text style={styles.title}>{selectedMeal[0].title}</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={[styles.subTitle, { textDecorationColor: categoryColor }]}>Ingredients:</Text>
                <View style={styles.description}>
                    {
                        selectedMeal[0].ingredients.map((ingredient, index) => {
                            return <Text style={styles.descriptionItem} key={ingredient}>{index + 1}. {ingredient}</Text>
                        })
                    }
                </View>
                <Text style={[styles.subTitle, { textDecorationColor: categoryColor }]}>Steps:</Text>
                <View style={styles.description}>
                    {
                        selectedMeal[0].steps.map((step, index) => {
                            return <Text style={styles.descriptionItem} key={step}>{index + 1}. {step}</Text>
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        borderColor: 'white',
        borderWidth: 8,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: { width: 4, height: 8 },
        shadowOpacity: 0.35,
        elevation: 5
    },
    imageStyles: {
        height: 300,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 16,
        letterSpacing: 1.2
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: "underline",
        textAlign: 'center',
        margin: 16,
        letterSpacing: 2
    },
    description: {
        textAlign: 'left',
        gap: 6,
    },
    descriptionItem: {
        fontSize: 16,
        marginHorizontal: 20,
        backgroundColor: '#fae3af',
        paddingHorizontal: 10,
        paddingVertical: 4,
    }
})