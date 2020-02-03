import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';
import {Tabs, Tab, Paper} from '@material-ui/core'

import { history } from '../router'
import { Form } from '../styles/login'


const Login = props => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userValue, setUserValue] = useState("Student")

    const handleChange = (e, val) => {
        setUserValue(val)
    }

    return (
        <Container style={{display: 'flex',  height: '100vh', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Login</h1>
            <Paper square style={{marginTop: "12px", width: '320px'}}>
                <Tabs
                    value = {userValue}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Student" value="Student" />
                    <Tab label="Instructor" value="Instructor" />
                </Tabs>
            </Paper>
            <Form>
            <TextField id="outlined-basic" label="Username *" variant="outlined" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <TextField id="outlined-basic" label="Password *" type="password" variant="outlined" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <Button style={{maxWidth: 100}} variant="contained" color="secondary">
                Login
            </Button>
            <Link href="#" onClick={() => history.push('/signup')}>Don't have an account? Sign Up here.</Link>

            </Form>
        </Container>
    )
}

export default Login