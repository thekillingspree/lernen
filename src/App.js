import React from 'react';
import './App.css';
import AppRouter from './router'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {store, persistor} from './store'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </Provider>
    );
}

export default App;
