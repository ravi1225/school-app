import axios from "axios";
import { call, put } from "redux-saga/effects";
import { LoginRequest, LoginSuccess, LoginFailure } from '../Actions/action';
import { environment } from '../../../environment';


export function* signUpSaga(action) {
    try {
        yield call(async () => {
            await axios.post(`${environment.apiBase}/brand/login`, action.user)
                .then(async (res) => {
                    await AsyncStorage.setItem("token", res.headers.token)
                    props.navigation.navigate("HomeScreen")
                })
        })
    } catch (err) {
        console.error(err)
    }
}