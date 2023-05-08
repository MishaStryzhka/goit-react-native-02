import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RegistrationScreen = () => {
    const addImages = () => {
        Alert.alert("Add imades");
    };
    return (
        <View style={styles.registrationContainer}>
            <View style={styles.imagesContainer}>
                <TouchableOpacity style={styles.btnAddsImages} onPress={addImages}>
                    <View style={styles.icon1} />
                    <View style={styles.icon2} />
                </TouchableOpacity>
            </View>
            <Text>Регистрация</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    registrationContainer: {
        position: "absolute",
        bottom: 0,
        height: 550,
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    imagesContainer: {
        position: "absolute",
        alignSelf: 'center',
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    btnAddsImages: {

        position: "absolute",
        right: -12.5,
        bottom: 26.5,
        width: 25,
        height: 25,
        // left: 235
        // top: 284px;
        // backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FF6C00",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    icon1: {
        position: "absolute",
        width: 1,
        height: 13,
        backgroundColor: "#FF6C00",
    },
    icon2: {
        position: "absolute",
        width: 13,
        height: 1,
        backgroundColor: "#FF6C00",
    }
});

export default RegistrationScreen;