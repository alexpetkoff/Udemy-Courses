import { useEffect, useState } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomNumber(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

let minBoundary;
let maxBoundary;

function GameScreen({ userNumber, setUserNumber }) {
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(dir) {
        if (userNumber === currentGuess) {
            return;
        }

        console.log("TEST -> ", minBoundary, maxBoundary, userNumber);

        if (Number(userNumber) < minBoundary || Number(userNumber) > maxBoundary) {
            Alert.alert("Invalid number!", "You are a cheating whore.", []);
            return setUserNumber(null);
        }

        if (dir === "lower") {
            maxBoundary = currentGuess - 1;
        } else if (dir === "greater") {
            minBoundary = currentGuess + 1;
        }

        const genNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(genNum);
        resultHandler();
    }

    function resultHandler() {
        if (userNumber === currentGuess) {
            return (
                <View>
                    <Text style={styles.title}>Correct!</Text>
                    <PrimaryButton title="Start new game" pressHandler={() => setUserNumber(null)} />
                </View>
            );
        } else {
            return <Text style={styles.title}>Wrong - Try again!</Text>;
        }
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={styles.title}>Higher or lower?</Text>
                <PrimaryButton
                    disabled={maxBoundary === currentGuess || currentGuess === userNumber}
                    title="+"
                    pressHandler={() => nextGuessHandler("greater")}
                />
                <PrimaryButton
                    disabled={minBoundary === currentGuess || currentGuess === userNumber}
                    title="-"
                    pressHandler={() => nextGuessHandler("lower")}
                />
                {resultHandler()}
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 12,
    },
});
