import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function CustomButton({ title, onPress }) {

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => {
                return pressed ? {
                    opacity: 0.75
                } : null
            }}
        >
            <Ionicons name="home" size={24} color="black" />
        </Pressable>
    )
}

export default CustomButton;
