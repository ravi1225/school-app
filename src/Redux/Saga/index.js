import {
    all,
    takeLatest,
} from 'redux-saga/effects';
import {
    LOGIN_REQUESTED,
} from '../Constant/constants';
import { loginSaga } from './loginSaga';


function* watchMan() {
    yield takeLatest(LOGIN_REQUESTED, loginSaga);

}

export default function* rootSaga() {
    yield all([watchMan()]);
};