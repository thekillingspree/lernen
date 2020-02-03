import { SET_THEME_MODE, SET_THEME_COLOR } from "../constants";

export const toggleTheme = () => ({
    type: SET_THEME_MODE
})

export const setThemeColor = color => ({
    type: SET_THEME_COLOR,
    color
})