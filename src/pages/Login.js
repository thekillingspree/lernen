import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';

import { history } from '../router'
import { Form } from '../styles/login'


const Login = props => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    return (
        <Container style={{display: 'flex',  height: '100vh', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Login</h1>
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