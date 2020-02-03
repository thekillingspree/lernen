import { DEF_USER, USER_LOGIN, USER_LOGOUT } from "../constants";

export default (state=DEF_USER, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload
        case USER_LOGOUT:
            return DEF_USER
        default:
            return state
    }
}