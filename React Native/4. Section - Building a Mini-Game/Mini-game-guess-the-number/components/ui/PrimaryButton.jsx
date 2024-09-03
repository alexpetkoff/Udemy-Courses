import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function PrimaryButton({ title, pressHandler }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => [styles.buttonInnerContainer, pressed ? styles.pressed : null]}
                onPress={pressHandler}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    pressed: {
        opacity: 0.75,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700",
    },
});
