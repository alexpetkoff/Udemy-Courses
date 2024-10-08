import { useState } from "react";
import { Alert, View, Image, Text, StyleSheet } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState('');
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions', 'You need to grant camera permissions to use this app.');
            return false;
        }

        return true;
    }

    async function takeImageHandler() {

        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        setPickedImage(image['assets'][0].uri);
    }

    let imagePreview = <Text style={{ color: 'black' }}>No image taken yet!</Text>;

    if (pickedImage) {
        imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
    }

    return (
        <View key={pickedImage}>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton icon='camera' onPress={takeImageHandler}>Take Image</OutlinedButton>
        </View>
    )
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});