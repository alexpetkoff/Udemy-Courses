import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        // fontWeight: "bold",
        color: Colors.accent500,
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 8,
        textAlign: "center",
    },
});

export default Title;
