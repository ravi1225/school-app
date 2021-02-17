import { GET_SUBBRAND } from "../Constant/constants";

const initialState = {
    value: '',
}

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_SUBBRAND: {
            return Object.assign({}, state,{
                value:[ action.subBrand]
            });
        }
        default :
        return state; 
    }
}
export default rootReducer;
