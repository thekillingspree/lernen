import { DEF_ADMIN, ADMIN_LOGIN, ADMIN_LOGOUT } from "../constants";

export default (state=DEF_ADMIN, action) => {
    switch (action.type) {
        case ADMIN_LOGIN:
            return action.payload
        case ADMIN_LOGOUT:
            return DEF_ADMIN
        default:
            return state
    }
}