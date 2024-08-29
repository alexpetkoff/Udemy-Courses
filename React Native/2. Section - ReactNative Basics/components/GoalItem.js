import { StyleSheet, View, Text, Pressable } from "react-native"

export default function GoalItem({ item, index, actionsGoalHandler, type }) {

    return (
        <View style={type ? styles.finishedStyle : styles.goalsStyle}>
            <Text >{index + 1}. {item.text}</Text>
            {
                type === undefined && (
                    <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={() => actionsGoalHandler(index)}>
                        <Text style={styles.actionsText}>[Actions]</Text>
                    </Pressable>
                )
            }

            {
                type === 'finished' && (
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={() => actionsGoalHandler(index, action = 'undo')}>
                            <Text style={styles.undoText}>[Undo]</Text>
                        </Pressable>
                        <Pressable android_ripple={{ opacity: 0.5 }} style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={() => actionsGoalHandler(index, action = 'delete')}>
                            <Text style={styles.deleteText}>[Del]</Text>
                        </Pressable>
                    </View>
                )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    goalsStyle: {
        marginTop: 6,
        padding: 12,
        backgroundColor: '#e6f9ff',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    actionsText: {
        color: 'gray',
        fontWeight: 'bold',
    },
    deleteText: { color: 'red', fontWeight: 'bold' },
    undoText: { color: 'darkgreen', fontWeight: 'bold' },
    finishedStyle: {
        flexWrap: 'wrap',
        marginTop: 6,
        padding: 12,
        backgroundColor: '#c0fcb6',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})