import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from "react-native";
import { Colors } from "./Colors";
import axios from 'axios';
import { environment } from '../../environment';
import { useEffect } from "react";
import { log } from "react-native-reanimated";

export default function Todo({ dataes }) {

    useEffect = (() => {
        if (dataes) {
            const res = axios.post(`${environment.apiBase}/brand/sub_brands`).then(res => 
            
            )
        }

    }, [dataes])



    return (
        <SafeAreaView style={styles.firstView}>
            <FlatList
                data={props.todo}
                renderItem={({ item }) => (
                    <View style={styles.flatlistView}>
                        <Text> Hello </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    firstView: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    flatlistView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
        marginHorizontal: 15,
        minHeight: 70,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightgray,
    },

    flatlistText: {
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0.5,
        fontSize: 25,
        minWidth: 335,
        borderBottomColor: Colors.lightgray,
        fontFamily: "Nunito-ExtraLight",

    },
    flatlistText1: {
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0.5,
        fontSize: 25,
        minWidth: 330,
        borderBottomColor: Colors.lightgray,
        textDecorationLine: "line-through",
        opacity: 0.5,
        fontFamily: 'Nunito-ExtraLight',
    },

    touchView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 15,
        marginBottom: 5,
    },
});
