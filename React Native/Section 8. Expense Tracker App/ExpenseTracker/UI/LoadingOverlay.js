import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../constants/styles';

function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
            <Text style={styles.loadingText}>Loading, please wait...</Text>
        </View>
    )
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: "white",
        fontWeight: '700'
    }
})