import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "../components/Colors";
import axios from 'axios';
import { environment } from '../../environment';
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function SignUp(props) {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [isloading, SetIsloading] = useState(false);


    const pressHandler = () => {
        props.navigation.navigate("SignIn");
    }

    const handlerClick = async () => {
        SetIsloading(true)
        const user = {
            "brand_name": brand,
            "user_name": name,
            "password": password,
            "confirm_password": confirm
        };
        const token = await AsyncStorage.getItem("token");
        if (token) {
            const headers = {
                "token": token
            }
        }
        try {
            await axios.post(`${environment.apiBase}/brand/register`, user, { headers })
                .then(res => {
                    props.navigation.navigate("Home")
                })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Image/appLogo.png')}
                style={styles.image}
            />
            <View style={styles.innerView}>
                <Text style={styles.text}> Brand :</Text>
                <TextInput
                    style={styles.inputText}
                    value={brand}
                    onChangeText={(e) => setBrand(e)}
                />
                <Text style={styles.text}> User Name :</Text>
                <TextInput
                    style={styles.inputText}
                    value={name}
                    onChangeText={(e) => setName(e)}
                />
                <Text style={styles.text}> Password :</Text>
                <View style={styles.passwordView}>
                    <TextInput
                        style={styles.inputText1}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <Ionicons name='ios-checkmark-circle' size={20} color={Colors.blue} />
                </View>
                <Text style={styles.text}> Confirm Password :</Text>
                <View style={styles.passwordView}>
                    <TextInput
                        style={styles.inputText1}
                        value={confirm}
                        secureTextEntry={true}
                        onChangeText={(e) => setConfirm(e)}
                    />
                    <Ionicons name='ios-checkmark-circle' size={20} color={Colors.blue} />
                </View>
            </View>
            {isloading ? <ActivityIndicator size={50} color={Colors.blue} /> :
                <TouchableOpacity style={styles.opacitySign} onPress={handlerClick}>
                    <Text style={styles.opacityText}> SIGN UP </Text>
                </TouchableOpacity>
            }
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
    passwordView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputText: {
        height: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.white,
        margin: 10,
        color: Colors.white,
        fontSize: 20,
    },
    inputText1: {
        height: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.white,
        margin: 10,
        color: Colors.white,
        fontSize: 20,
        minWidth: 330,
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
        marginRight: 8,
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
