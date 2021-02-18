import axios from "axios";
import { call, put } from "redux-saga/effects";
import { LoginSuccess, loginError, loginSuccess } from '../Action/action';
import { environment } from '../../../environment';
import AsyncStorage from "@react-native-async-storage/async-storage";


export function* loginSaga(action) {

    try {
        const response = yield call(async () => {
            await axios.post(`${environment.apiBase}/brand/login`, action.user)
                .then(async (res) => {
                    console.log(res, 'uuuuuuuuuuuuuuu');
                    await AsyncStorage.setItem("token", res.headers.token)
                })
        })
        if (response) {
            yield put(loginSuccess({ response: response }))
        } else {
            yield put(loginError({ error: "invalid user" }))
        }
    } catch (err) {
        yield put(loginError({ err: "invalid user" }))
    }
}