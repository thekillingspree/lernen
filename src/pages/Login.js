import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import { history } from '../router'
import { Form } from '../styles/login'


const Login = props => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    return (
        <Container>
            <h1>Login</h1>
            <Form>
            <TextField id="outlined-basic" label="Username" variant="outlined" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            </Form>
        </Container>
    )
}

export default Login