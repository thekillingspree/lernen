import axios from 'axios'
import { API_END_PT } from '../constants'

export const getQuiz = id => {
    return async (dispatch, getState) => {
        try {
            const {user} = getState()
            const {data} = await axios.post(`${API_END_PT}/api/quiz`, {}, {
                headers: {Authorization: `Bearer ${user.token}`}
            })
            return data
        } catch(e) {
            console.log(e)
            return e.response.data
        }
    }
}

export const createQuiz = quiz => {
    return async (dispatch, getState) => {
        try {   
            const {admin} = getState()
            const {data} = await axios.post(`${API_END_PT}/api/quiz/new`, {...quiz}, {
                headers: {Authorization: `Bearer ${admin.token}`}
            })
            return data;
        } catch(e) {
            console.log(e)
            return e.response.data;
        }
    }
}