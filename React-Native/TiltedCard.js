import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
    const transformStyle1 = {
        transform: [{ rotateY: '50deg' }],
    };
    const transformStyle2 = {
        transform: [{ rotateY: '-50deg' }],
    };
    return (
        <View style={styles.container}>
            <View style={[styles.box, transformStyle1]}></View>
            <View style={[styles.box, transformStyle2]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    box: {
        height: 198,
        width: 230,
        backgroundColor: 'yellow',
        borderRadius: 26,
    },
});