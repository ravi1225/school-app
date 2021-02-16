import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSubBrand } from "../Redux/Action/action";


const Data =(props) => {
    let result =[];
    
    useEffect(() => {
        getResult();
    }, [getResult]);

        const getResult = async () => {
            const token = await AsyncStorage.getItem("token");
            const headers = {
                "token": token
            }
            try {
                     axios.get(`${environment.apiBase}/brand/sub_brands`, { headers })
                    .then((res) =>{
                        res.data.forEach((user,i)=>{
                            if(user.user_name=='Ravi Ranjan')
                            {
                            res.data[i].sub_brand.forEach(s=>{
                                result.push({name:s.subBrand_name,des:s.description})
                             })
                            }
                        })
                        props.dispatch(getSubBrand(result));
                    })
                }catch (err) {
                    console.error(err);
                }        
            }

    return (
        <SafeAreaView style={styles.firstView}>
            <FlatList
                data={props.value[0]}
                renderItem={({ item }) => (
                    <View style={styles.flatlistView}>
                        <Text> Sub Brand: {item.name}  Description: {item.des} </Text>
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


const mapStateToProps = (state) => {
    return {
      value: state.value,
    };
  };

const mapdispatchToProps = (dispatch) => {
    return {
      dispatch
    };
  };
  
  export default connect(mapStateToProps, mapdispatchToProps)(Data);
  