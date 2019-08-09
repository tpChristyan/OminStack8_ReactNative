import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    StyleSheet,
    Platform,
    Image,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";

import logo from "../assets/logo.png";

export default function Login({ navigation }) {
    const [user, setUser] = useState("");

    function handleLogin() {
        navigation.navigate("Main");
    }
    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === "ios"}
            style={styles.container}
        >
            <Image source={logo} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuario"
                placeholderTextColor="#999"
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: "stretch",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: "stretch",
        backgroundColor: "#df4723",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    }
});
