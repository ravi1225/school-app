import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
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
            <Image
                source={require('../../assets/images.png')}
                style={styles.image}
            />
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
            <TouchableOpacity style={styles.opacitySign}>
                <Text style={styles.opacityText}> SIGN UP </Text>
            </TouchableOpacity>
            <View style={styles.lastView}>
                <Text style={styles.signText}>
                    Already a member?
                    </Text>
                <Text
                    style={styles.signText1}
                    onPress={pressHandler}
                >
                    Sign in
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.black,
    },
    image: {
        resizeMode: 'contain',
        width: 120,
        alignSelf: 'center',
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
        borderBottomColor: Colors.white,
        margin: 10,
        color: Colors.white,
        fontSize: 20,
    },
    text: {
        color: Colors.white,
        margin: 5,
        fontSize: 20,
    },
    opacitySign: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 200,
        alignSelf: 'center',
        backgroundColor: Colors.blue,
        margin: 10,
        marginBottom: 20,
    },
    opacityText: {
        color: Colors.white,
        fontSize: 20,
    },
    signText: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.white,
        margin: 3,
    },
    signText1: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        fontWeight: 'bold',
        color: Colors.blue,
    },
    lastView: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

});
