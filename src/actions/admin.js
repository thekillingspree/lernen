import { LOGIN, API_END_PT } from "../constants";
import axios from "axios";

const adminLoginAction = admin => ({
    type: LOGIN,
    payload: admin
})

export const adminLogin = async (username, password) => {
    return async dispatch => {
        try {
            const {data} = await axios.post(`${API_END_PT}/admin/login`, {
                username,
                password
            });
            console.log(data);
            dispatch(adminLoginAction(data))
            return true
        } catch(e) {
            console.log(e);
            return false
        }
    }
}