import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "./Colors";
import AddModal from './AddModal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Heading(props) {
    const [modalVal, setModalVal] = useState(false);

    const handleClick = () => {
        setModalVal(!modalVal);
    };


    return (
        <>
            <SafeAreaView style={styles.headingView}>
                {/* <TouchableOpacity style={styles.headerFontIcon} onPress={() => props.navigation.navigate.openDrawer()}>
                    <FontAwesome name="bars" size={40} />
                </TouchableOpacity> */}
                <Text style={styles.mainHeader}> {props.type} </Text>
                <TouchableOpacity
                    style={styles.headerTouchable}
                    onPress={handleClick}
                >
                    <Icon name="pluscircleo" size={40} color={Colors.blue} />
                </TouchableOpacity>
            </SafeAreaView>

            {modalVal ? (
                <AddModal
                    modalVal={modalVal}
                    handleClick={handleClick}
                    setModalVal={setModalVal}
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
        marginTop: 20,
        paddingHorizontal: 5,
        minHeight: 80,
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
    headerFontIcon: {
        alignSelf: 'center',
        marginLeft: 5
    },
});
