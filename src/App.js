import React from 'react';
import './App.css';
import AppRouter from './router'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {store, persistor} from './store'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fed330",
            light: "#fed330",
            dark: "#fed330"
        },
        secondary: {
            main: "#fed330",
            light: "#fed330",
            dark: "#fed330"
        },
        background: {
            default: "#121212"
        },
        type: "dark"
    },
    typography: {
        fontFamily: "'Poppins', sans-serif"
    }
})

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <PersistGate loading={null} persistor={persistor}>
                    <AppRouter />
                </PersistGate>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
