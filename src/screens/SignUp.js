import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Colors } from "../components/Colors";


export default function SignUp(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const pressHandler = () => {
        props.navigation.navigate("SignIn");
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/BackgroundImage.png")}
                style={styles.loginImage}
                resizeMode="cover"
            >
                <View style={styles.innerView}>
                    <Text style={styles.text}> Email :</Text>
                    <TextInput
                        style={styles.inputText}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <Text style={styles.text}> Password :</Text>
                    <TextInput
                        style={styles.inputText}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <Text style={styles.text}> Confirm Password :</Text>
                    <TextInput
                        style={styles.inputText}
                        value={confirm}
                        secureTextEntry={true}
                        onChangeText={(e) => setConfirm(e)}
                    />
                </View>
                <TouchableOpacity style={styles.signUp}>
                    <Text style={styles.opacityText}> SIGN UP </Text>
                </TouchableOpacity>
                <View style={styles.lastView}>
                    <Text style={styles.signText}>
                        Already a member?
                    </Text>
                    <Text
                        style={styles.signText}
                        onPress={pressHandler}
                    >
                        Sign in
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    loginImage: {
        flex: 1,
        justifyContent: "center",
    },
    innerView: {
        margin: 20,
    },
    inputText: {
        height: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.black,
        margin: 10,
        color: Colors.black,
        fontSize: 20,
    },
    text: {
        color: Colors.black,
        margin: 5,
        fontSize: 20,
    },
    signUp: {
        height: 40,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 200,
        alignSelf: 'center',
        backgroundColor: Colors.CornflowerBlue,
        margin: 10
    },
    opacityText: {
        color: Colors.white,
        fontSize: 20,
    },
    signText: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.black,
        margin: 3,
        borderBottomWidth: 1,
    },
    lastView: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

});