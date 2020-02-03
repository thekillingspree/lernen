import {combineReducers} from 'redux'
import theme from './theme'
import user from './user'
import admin from './admin'

export default combineReducers({
    user,
    quiz: () => ({}),
    admin,
    theme
});