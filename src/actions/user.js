import { USER_LOGIN, API_END_PT, USER_LOGOUT } from "../constants";
import axios from "axios";

const userLoginAction = user => ({
    type: USER_LOGIN,
    payload: {...user.result, token:user.token}
})

export const userLogout = () => ({
    type: USER_LOGOUT
})


export const userLogin = (username, password) => {
    return async dispatch => {
        try {
            const {data} = await axios.post(`${API_END_PT}/users/login`, {
                username,
                password
            });
            console.log(data);
            dispatch(userLoginAction(data))
        } catch(e) {
            console.log(e.response.data);
            return e.response.data
        }
    }
}
export const userSignup = (username, password, email, fname) => {
    return async dispatch => {
        try {
            const {data} = await axios.post(`${API_END_PT}/users/signup`, {
                username,
                password,
                fullname: fname, 
                email
            });
            console.log(data);
            dispatch(userLoginAction(data))
        } catch(e) {
            console.log(e.response.data);
            return e.response.data
        }
    }
}

export const getAllUserCourses = () => {
    return async (dispatch, getState) => {
        const {user} = getState()
        try {
            const {data} = await axios.get(`${API_END_PT}/users/enrolled?uid=${user._id.$oid}`, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            console.log(data);
            return data
        } catch(e) {
            console.log(e.response.data);
            return e.response.data
        }
    }
}