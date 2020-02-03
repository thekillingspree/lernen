import React from 'react';
import './App.css';
import AppRouter from './router'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider, connect} from 'react-redux'
import {store, persistor} from './store'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

let Layout = ({theme: {color, isDark}}) => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main:color,
                light:color,
                dark:color
            },
            secondary: {
                main:color,
                light:color,
                dark:color
            },
            background: {
                default: !isDark ? "#fff" : "#121212"
            },
            type: isDark ? "dark" : "light"
        },
        typography: {
            fontFamily: "'Poppins', sans-serif"
        }
    })
    return (
        <ThemeProvider theme={theme}>
                <CssBaseline />
                <PersistGate loading={null} persistor={persistor}>
                    <AppRouter />
                </PersistGate>
            </ThemeProvider>
    )
}

Layout = connect(({theme}) => ({theme}))(Layout)

function App() {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
}

export default App;
