import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Heading from "./Heading";
import Data from './Data';

export default function AllComponents({ type }) {

    return (
        <SafeAreaView style={styles.container}>
            <Heading type={type}
            />
            <View>
                <Data />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
