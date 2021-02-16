import axios from "axios"
import { environment } from "../environment"

export const login = (user) => {
    try {
        axios.post(`${environment.apiBase}/brand/login`, user)
            .then(res => {

                props.navigation.navigate("Home")

            })

    } catch (error) {
        console.error(error)
    }
}

export const signUp = (user) => {
    try {
        axios.post(`${environment.apiBase}/brand/register`, user)
            .then(res => {
                console.log(res)
                props.navigation.navigate("SignIn")

            })

    } catch (error) {
        console.error(error)
    }
}