import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);

    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen changeScreenHandler={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen setUserNumber={setUserNumber} userNumber={userNumber} />;
    } else {
        screen = <StartGameScreen changeScreenHandler={pickedNumberHandler} />;
    }

    return (
        <LinearGradient colors={["#870145", "#ddb52f"]} style={styles.rootScreen}>
            <ImageBackground source={require("./assets/images/background.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={{ opacity: 0.1 }}>
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
});
