import { View, TextInput, Button, StyleSheet, Modal, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';

export default function GoalInput({ text, setText, goalsHandler, isVisible, setIsVisible }) {
    return (
        <Modal visible={isVisible} animationType={"slide"}>
            <KeyboardAvoidingView style={styles.inputContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.image} source={require('../assets/goal.png')} />
                        <TextInput autoFocus={true} style={styles.textInput} placeholder="Your course goal..."
                            value={text} onChangeText={setText} />
                        <View style={{ flexDirection: 'row', gap: 16 }}>
                            <Button title="Add Goal" onPress={goalsHandler} />
                            <Button color={'red'} title="Close Modal" onPress={() => setIsVisible(false)} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
    textInput: {
        borderColor: 'white',
        borderWidth: 2,
        padding: 12,
        width: '70%',
        color: '#120438',
        backgroundColor: "white",
        borderRadius: 8
    },
    inputContainer: {
        backgroundColor: 'lightblue',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
})