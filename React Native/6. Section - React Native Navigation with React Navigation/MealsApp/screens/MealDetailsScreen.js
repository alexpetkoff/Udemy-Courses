import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from "../data/dummy-data";
import CustomButton from '../components/CustomButton';

function MealDetailsScreen({ route, navigation }) {

    const { mealID, categoryColor } = route.params;

    const selectedMeal = MEALS.filter((meal) => {
        return meal.id === mealID
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Description',
            headerStyle: {
                backgroundColor: categoryColor
            },
            headerRight: () => {
                return <CustomButton color={'black'} title='star-outline' onPress={() => navigation.navigate('Categories')} />
            }
        })
    }, [navigation, categoryColor]);

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