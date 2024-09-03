import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";

function StartGameScreen({ changeScreenHandler }) {
    const [inputValue, setInputValue] = useState("");

    const inputValueHandler = (inputText) => {
        setInputValue(inputText);
    };

    const resetHandler = () => {
        setInputValue("");
    };

    const confirmHandler = () => {
        const chosenNumber = parseInt(inputValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number!", "Number has to be between 1 and 99 and must not be a string.", [
                { text: "OK", style: "destructive", onPress: resetHandler },
            ]);
            return;
        }

        changeScreenHandler(chosenNumber);
    };

    return (
        <View style={styles.inputContainer}>
            <Title>GUESS THE NUMBER</Title>
            <View style={styles.numberInputContainer}>
                <TextInput
                    style={styles.numberInput}
                    value={inputValue}
                    onChangeText={inputValueHandler}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.singleButton}>
                    <PrimaryButton title={"Reset"} pressHandler={resetHandler} />
                </View>
                <View style={styles.singleButton}>
                    <PrimaryButton title={"Confirm"} pressHandler={confirmHandler} />
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        padding: 15,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4, //Android specific
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInputContainer: {
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        width: 45,
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    singleButton: {
        flex: 1,
    },
});
