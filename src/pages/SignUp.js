import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { history } from '../router'
import { Form } from '../styles/login'
import {Paper, Tabs, Tab} from '@material-ui/core'


const SignUp = props => {

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userValue, setUserValue] = useState("Student")

    const handleChange = (e, val) => {
        setUserValue(val)
    }
    
    return (
        <Container style={{display: 'flex',  height: '100vh', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Sign Up</h1>
            <p>Join now to experience a revolutionized way of learning!</p>
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