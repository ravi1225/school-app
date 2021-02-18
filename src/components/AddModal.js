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
import { connect } from "react-redux";
import { addSubBrand } from "../Redux/Action/action";


const AddModal = (props) => {

    const [subbrand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const user = {
        "subBrand_name": subbrand,
        "description": description
    };


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
                            <TouchableOpacity onPress={() => {
                                props.addSubBrand(user);
                                props.setModalVal(false);
                                setDescription('');
                                setBrand('')
                            }}>
                                <Text style={styles.textStyle}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
export const GET_TOKEN = 'GET_TOKEN;'
            </Modal>
        </View >
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


const mapdispatchToProps = (dispatch) => {
    return {
        addSubBrand: (user) => dispatch(addSubBrand(user)),
    };
};

export default connect(null, mapdispatchToProps)(AddModal);
