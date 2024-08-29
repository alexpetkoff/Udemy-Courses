import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function GoalInput({ text, setText, goalsHandler, isVisible, setIsVisible }) {
    return (
        <Modal visible={isVisible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <TextInput autoFocus={true} style={styles.textInput} placeholder="Your course goal..."
                    value={text} onChangeText={setText} />
                <View style={{ flexDirection: 'row', gap: 16 }}>
                    <Button title="Add Goal" onPress={goalsHandler} />
                    <Button color={'red'} title="Close Modal" onPress={() => setIsVisible(false)} />
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'lightgray',
        borderWidth: 2,
        padding: 12,
        width: '70%',
    },
    inputContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        marginBottom: 24,
    },
})