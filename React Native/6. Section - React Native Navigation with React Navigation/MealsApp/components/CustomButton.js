import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function CustomButton({ color, title, onPress }) {

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => {
                return pressed ? {
                    opacity: 0.75
                } : null
            }}
        >
            <Ionicons name={title} size={24} color={color} />
        </Pressable>
    )
}

export default CustomButton;
