import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';

function MealDetailsScreen({ route }) {
    const navigation = useNavigation();

    const { mealID, title, categoryColor, imageUrl } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Description',
            headerStyle: {
                backgroundColor: categoryColor
            }
        })
    }, [navigation])


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.imageStyles} />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
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
        height: 200,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 16
    }
})