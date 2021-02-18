import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import mainReducer from "../Reducer/mainReducer";
// import loginReducer from '../Reducer/loginReducer';
import rootSaga from '../Saga/index'

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    mainReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
