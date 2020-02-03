import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { history } from '../router'
import { Form } from '../styles/login'


const SignUp = props => {

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container style={{display: 'flex',  height: '100vh', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Sign Up</h1>
            <p>Join now to experience a revolutionized way of learning!</p>
            <Form height="400px">
            <TextField id="outlined-basic" label="Name *" variant="outlined" 
            value={name}
            onChange={e => setName(e.target.value)}
            />
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
            <Link href="#" onClick={() => history.push('/login')}>Already have an account? Login here.</Link>
            </Form>
        </Container>
    )
}

export default SignUp