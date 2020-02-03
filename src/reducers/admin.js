import { DEF_USER, ADMIN_LOGIN, ADMIN_LOGOUT } from "../constants";

export default (state=DEF_USER, action) => {
    switch (action.type) {
        case ADMIN_LOGIN:
            return action.payload
        case ADMIN_LOGOUT:
            return DEF_USER
        default:
            return state
    }
}