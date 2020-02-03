import { createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers'
//TODO: optimize with thunk

// export default () => {
//     let store = createStore(auth);
//     return store;
// }

const persistedReducer = persistCombineReducers({
    key: 'root',
    storage
}, rootReducer); //{auth, admin}


export const store = createStore(persistedReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);

