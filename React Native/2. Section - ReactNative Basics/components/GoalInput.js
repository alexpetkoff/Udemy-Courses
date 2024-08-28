import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function GoalInput({ text, setText, goalsHandler }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Your course goal..." value={text} onChangeText={setText} />
            <Button title="Add Goal" onPress={goalsHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'lightblue',
        borderWidth: 1,
        padding: 4,
        width: '70%',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
})