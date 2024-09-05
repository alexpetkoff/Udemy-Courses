import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';

function CategoriesGridTile({ title, color, onPress }) {

    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} android_ripple={{ color: '#ccc' }} >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </ View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5,
        backgroundColor: 'white',
        borderRadius: 8
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }

})
export default CategoriesGridTile;