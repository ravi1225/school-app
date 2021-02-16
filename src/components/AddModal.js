import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Colors } from "./Colors";
import axios from 'axios';
import { environment } from '../../environment';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AddModal(props) {

    const [subbrand, setBrand] = useState('');
    const [description, setDescription] = useState('');



    const addOffice = async () => {
        const user = {
            "subBrand_name": subbrand,
            "description": description
        };
        const token = await AsyncStorage.getItem("token");
        const headers = {
            "token": token
        }
        try {
            await axios.post(`${environment.apiBase}/brand/sub_brand/add`, user, { headers })
                .then(res => {
                    console.log((res));
                    if (res.config.data) {
                        props.handleSetStauss()
                    }
                })
            setDescription('');
            setBrand('');
            props.setModalValue(false)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <View>
            <Modal visible={props.modalVal} animationType="fade" transparent={true}>
                <View style={styles.externalView}>
                    <View style={styles.internalView}>
                        <Text style={styles.headerText}> Sub Brand:  </Text>
                        <TextInput
                            style={styles.inputBox}
                            value={subbrand}
                            onChangeText={e => setBrand(e)}
                        />
                        <Text style={styles.headerText}> Description:  </Text>
                        <TextInput
                            style={styles.inputBox}
                            numberOfLines={3}
                            multiline={true}
                            value={description}
                            onChangeText={e => setDescription(e)}
                        />
                        <View style={styles.thirdView}>
                            <TouchableOpacity onPress={props.handleClick}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={addOffice}>
                                <Text style={styles.textStyle}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    externalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    internalView: {
        borderRadius: 15,
        paddingRight: 5,
        borderWidth: 1,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
        minWidth: 390,
        borderColor: Colors.lightgray,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },

    inputBox: {
        borderWidth: 1,
        borderColor: Colors.lightgray,
        borderRadius: 10,
        minWidth: 350,
        padding: 10,
    },

    thirdView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },

    textStyle: {
        color: Colors.blue,
        fontSize: 20,
    },
});
