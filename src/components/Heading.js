import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "./Colors";
import AddModal from './AddModal';

export default function Heading(props) {
    const [modalVal, setModalVal] = useState(false);

    const handleClick = () => {
        setModalVal(!modalVal);
    };


    return (
        <>
            <View style={styles.headingView}>
                <Text style={styles.mainHeader}> {props.type} </Text>
                <TouchableOpacity
                    style={styles.headerTouchable}
                    onPress={handleClick}
                >
                    <Icon name="pluscircleo" size={40} color={Colors.blue} />
                </TouchableOpacity>
            </View>

            {modalVal ? (
                <AddModal
                    modalVal={modalVal}
                    handleClick={handleClick}
                    setModalVal={setModalVal}
                    handleSetStauss={props.handleSetStauss}
                />
            ) : null}
        </>
    );
}

const styles = StyleSheet.create({
    headingView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: Colors.black,
        marginTop: 5,
        paddingHorizontal: 5,
        minHeight: 100,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightgray,
    },
    mainHeader: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headerTouchable: {
        fontWeight: "bold",
        marginRight: 10,
    },
});
