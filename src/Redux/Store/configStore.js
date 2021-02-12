import { createStore } from "redux";
import fetchDataReducer from "../Reducers/reducer";

const store = createStore(fetchDataReducer);

export default store;
