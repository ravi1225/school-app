import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Colors } from "../components/Colors";


export default function SignIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pressHandler = () => {
        props.navigation.navigate("SignUp");
    }

    return (

        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/BackgroundImage.png")}
                style={styles.loginImage}
                resizeMode="cover"
            >
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
                <TouchableOpacity style={styles.opacitySign}>
                    <Text style={styles.opacityText}> SIGN IN </Text>
                </TouchableOpacity >

                <View style={styles.lastView}>
                    <Text style={styles.signText}>
                        Don't have an Acoount?
                    </Text>
                    <Text
                        style={styles.signText}
                        onPress={pressHandler}
                    >
                        Sign Up
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
    inputText: {
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.black,
        margin: 10,
        color: Colors.black,
        fontSize: 20
    },
    text: {
        color: Colors.black,
        margin: 5,
        fontSize: 20
    },

    opacitySign: {
        height: 50,
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
        borderBottomWidth: 1,
        margin: 3,
    },
    lastView: {
        flexDirection: 'row',
        justifyContent: 'center',

    }

});