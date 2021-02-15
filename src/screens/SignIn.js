import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { environment } from "../../environment";
import { Colors } from "../components/Colors";
import axios from 'axios';


export default function SignIn(props) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isloading, SetIsloading] = useState(false);

    const pressHandler = () => {
        props.navigation.navigate("SignUp");
    }

    const signIn = async () => {
        SetIsloading(true)
        const user = {
            "user_name": name,
            "password": password
        };
        const res = axios.post(`${environment.apiBase}/brand/login`, user)
            .then(res => {
                props.navigation.navigate("Home")

            })

    }

    return (

        <View style={styles.container}>
            <Image
                source={require('../../assets/Image/appLogo.png')}
                style={styles.image}
            />
            <View style={styles.innerView}>
                <Text style={styles.text}> User Name :</Text>
                <TextInput
                    style={styles.inputText}
                    value={name}
                    onChangeText={(e) => setName(e)}
                />
                <Text style={styles.text}> Password :</Text>
                <TextInput
                    style={styles.inputText}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
            </View>
            <TouchableOpacity style={styles.opacitySign} onPress={signIn}>
                <Text style={styles.opacityText}> SIGN IN </Text>
            </TouchableOpacity >
            {isloading ? <ActivityIndicator size={50} color={Colors.blue} /> : null}
            <View style={styles.lastView}>
                <Text style={styles.signText}>
                    Don't have an Account?
                    </Text>
                <Text
                    style={styles.signText1}
                    onPress={pressHandler}
                >
                    Sign Up
                    </Text>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.black
    },
    image: {
        resizeMode: 'contain',
        width: 120,
        alignSelf: 'center',
    },
    innerView: {
        margin: 20,
    },
    loginImage: {
        flex: 1,
        justifyContent: "center",
    },
    inputText: {
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.white,
        margin: 10,
        color: Colors.white,
        fontSize: 20
    },
    text: {
        color: Colors.white,
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
        backgroundColor: Colors.blue,
        margin: 10,
        marginBottom: 20
    },
    opacityText: {
        color: Colors.white,
        fontSize: 20,

    },
    signText: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.white,
        marginRight: 8,
    },
    signText1: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.blue,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        fontWeight: 'bold'
    },
    lastView: {
        flexDirection: 'row',
        justifyContent: 'center',

    }
});
