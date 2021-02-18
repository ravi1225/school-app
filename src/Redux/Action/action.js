import {
    Add_SUBBRAND,
    GET_SUBBRAND,
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_REQUESTED,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    GET_TOKEN
} from "../Constant/constants";

export const loginRequested = (user) => {
    return {
        type: LOGIN_REQUESTED,
        user
    }
}

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,

    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR,
    }
}

export const signUpRequested = () => {
    return {
        type: SIGNUP_REQUESTED,
    }
}

export const signUpSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        user
    }
}

export const signUpError = () => {
    return {
        type: SIGNUP_ERROR,
    }
}

export const addSubBrand = (user) => {
    return {
        type: Add_SUBBRAND,
        user
    }
}

export const getSubBrand = (subBrand) => {
    return {
        type: GET_SUBBRAND,
        subBrand
    }
}
