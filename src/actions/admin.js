import { ADMIN_LOGIN, API_END_PT, ADMIN_LOGOUT } from "../constants";
import axios from "axios";

const adminLoginAction = admin => ({
    type: ADMIN_LOGIN,
    payload: {...admin.result, token: admin.token}
})

export const adminLogout = () => ({
    type: ADMIN_LOGOUT
})

export const adminLogin = (username, password) => {
    return async dispatch => {
        try {
            const {data} = await axios.post(`${API_END_PT}/admin/login`, {
                username,
                password
            });
            console.log(data);
            dispatch(adminLoginAction(data))

        } catch(e) {
            console.log(e.response.data);
            return e.response.data
        }
    }
}

export const adminSignup = (username, password, email, fname) => {
    return async dispatch => {
        try {
            const {data} = await axios.post(`${API_END_PT}/admin/signup`, {
                username, password, fname, email
            });
            console.log(data);
            dispatch(adminLoginAction(data))

        } catch(e) {
            console.log(e.response.data);
            return e.response.data
        }
    }
}

export const createCourse = (course) => {
    return async (dispatch, getState) => {
        const {admin} = getState()
        try {
            const {data} = await axios.post(`${API_END_PT}/course/new`, {
                ...course
            }, {
                headers: { Authorization: `Bearer ${admin.token}` }
            });
            console.log(data);
        
        } catch(e) {
            console.log(e.response.data);
            return e.response.data
        }
    }
}

export const getAllCourses = () => {
    return async (dispatch, getState) => {
        const {admin} = getState()
        try {
            const {data} = await axios.get(`${API_END_PT}/admin/courses?id=${admin._id.$oid}`, {
                headers: { Authorization: `Bearer ${admin.token}` }
            });
            console.log(data);
            return data
        } catch(e) {
            console.log(e.response.data);
            return e.response.data
        }
    }
}


export const addVideo = video => {
    return async (dispatch, getState) => {
        const {admin} = getState()
        try {
            const {data} = await axios.post(`${API_END_PT}/course/addvideo?id=${admin._id.$oid}`, {...video}, {
                headers: { Authorization: `Bearer ${admin.token}` }
            });
            console.log(data);
        } catch(e) {
            console.log(e.response.data);
            return e.response.data
        }
    }
}