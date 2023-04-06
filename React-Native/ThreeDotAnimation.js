import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

export default function AddButton() {
    mode = new Animated.Value(0);
    buttonSize = new Animated.Value(1);

    const handlePress = () => {
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.95,
                duration: 200
            }),
            Animated.timing(buttonSize, {
                toValue: 1
            }),
            Animated.timing(mode, {
                toValue: mode._value === 0 ? 1 : 0
            })
        ]).start();
    };


    const thermometerX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -65]
    });

    const thermometerY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -70]
    });

    const timeX = mode.interpolate({
        // inputRange: [0, 1],
        // outputRange: [-24, -24]
        inputRange: [0, 1],
        outputRange: [-14, -60]
    });

    const timeY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-40, -20]
    });

    const pulseX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, -15]
    });

    const pulseY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 5]
    });

    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
    });

    const sizeStyle = {
        transform: [{ scale: buttonSize }]
    };

    return (
        <View style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{ position: "absolute", alignItems: "center" }}>
                <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="thermometer" size={24} color="#FFF" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="clock" size={24} color="#FFF" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                    <View style={styles.secondaryButton}>
                        <Feather name="activity" size={24} color="#FFF" />
                    </View>
                </Animated.View>
                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight onPress={handlePress} underlayColor="#7F58FF">
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                            <FontAwesome5 name="plus" size={24} color="#FFF" />
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 55,
        height: 55,
        borderRadius: 36,
        backgroundColor: "#7F58FF",
        position: "absolute",
        marginTop: -60,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF"
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 34,
        height: 34,
        borderRadius: 24,
        backgroundColor: "#7F58FF"
    }
});