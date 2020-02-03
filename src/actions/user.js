import { USER_LOGIN, API_END_PT } from "../constants";
import axios from "axios";

const userLoginAction = user => ({
    type: USER_LOGIN,
    payload: user
})

export const userLogin = async (username, password) => {
    return async dispatch => {
        try {
            const {data} = await axios.post(`${API_END_PT}/users/login`, {
                username,
                password
            });
            console.log(data);
            dispatch(userLoginAction(data))
            return true
        } catch(e) {
            console.log(e);
            return false
        }
    }
}