import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function MealCard({ id, title, imageUrl, duration, complexity, affordability, categoryColor }) {

    const navigation = useNavigation();

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => {
                    return pressed ? {
                        opacity: 0.85, borderRadius: 8
                    } : null
                }}
                onPress={() => navigation.navigate('MealDetails', {
                    mealID: id,
                    categoryColor: categoryColor,
                    imageUrl: imageUrl,
                    title: title
                })}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.imageStyles} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text>Duration: {duration}min</Text>
                        <Text>Complexity: {complexity}</Text>
                        <Text>Affordability: {affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealCard;

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: 'white',
        margin: 16,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    imageStyles: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8
    },
    details: {
        flexDirection: 'row',
        padding: 8,
        gap: 16,
        flexWrap: 'wrap',
        alignItems: 'center',
    }
})