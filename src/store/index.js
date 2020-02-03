import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers'
//TODO: optimize with thunk

// export default () => {
//     let store = createStore(auth);
//     return store;
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer); //{auth, admin}


export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store);

console.log(store.getState())