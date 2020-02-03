import {YELLOW} from '.'

export const DEF_THEME = {
    color: YELLOW,
    isDark: false
}

export const DEF_USER = {
    _id: {$oid: ""},
    username: "",
    email: "",
    current_course: {},
    fname: "",
    token: ""
}

export const DEF_ADMIN = {
    _id: {$oid: ""},
    username: "",
    email: "",
    fname: "",
    token: ""
}