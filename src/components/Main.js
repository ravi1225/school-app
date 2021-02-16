import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Heading from "./Heading";
import Data from './Data';

export default function AllComponents({ type }) {
    const [dataes, setDataes] = useState(false)

    const handleSetStauss = () => {
        setDataes(true)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Heading type={type} handleSetStauss={handleSetStauss} />
            <View>
                <Data dataes={dataes} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
