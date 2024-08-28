import { StyleSheet, View, Text } from "react-native"

export default function GoalItem({ item, index }) {
    return (
        <View style={styles.goalsStyle}>
            <Text>{index + 1}. {item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalsStyle: {
        marginTop: 6,
        padding: 6,
        backgroundColor: 'lightblue',
        borderRadius: 8,
    }
})