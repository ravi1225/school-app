import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Main from '../components/Main';



const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, minHeight: 100, alignItems: 'center', justifyContent: 'flex-start', padding: 5, margin: 5 }}>
                    <FontAwesome5 name="user-alt" size={25} />
                    <Text style={{ fontSize: 20 }}> Hello, </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Ravi Ranjan </Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

const MyDrawer = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerFontIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="bars" size={40} />
                </TouchableOpacity>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> Home </Text>
                </View>
            </View>
        </View>
    )
}


export default function Home() {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={MyDrawer} />
            <Drawer.Screen name="Office" component={() => <Main type="Office" />} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    headerView: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        minHeight: 70,
    },
    headerFontIcon: {
        alignSelf: 'center',
        marginLeft: 5
    },
    headerTextView: {
        justifyContent: 'center',
        marginRight: 150,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})
