import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';
import {Tabs, Tab, Paper} from '@material-ui/core'
import { connect } from 'react-redux';
import { history } from '../router'
import '../styles/form.css'
import { userLogin, adminLogin } from '../actions';
import LoadingDialog from '../components/LoadingDialog';
import Snackbar from '../components/Snackbar';

const Login = props => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userValue, setUserValue] = useState("Student")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (e, val) => {
        setUserValue(val)
    }

    const onFormSubmit = async e => {
        e.preventDefault();
        console.log(userValue)
        setLoading(true)
        let error;
        if (userValue === 'Student') {
            error = await props.userLogin(username, password)
        } else {
            error = await props.adminLogin(username, password)
        }
        setError(error)
        setLoading(false)
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
            <form className="form" onSubmit={onFormSubmit}> 
            <TextField id="outlined-basic" label="Username" variant="outlined" 
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
            />
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" 
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={onFormSubmit} style={{maxWidth: 100}} variant="contained" color="secondary">
                Login
            </Button>
            <Link href="#" onClick={() => history.push('/signup')}>Don't have an account? Sign Up here.</Link>

            </form>
            <LoadingDialog open={loading} title="Logging In"/>
            <Snackbar 
            variant="error"
            open={error}
            message={error && error.error}
            onClose={() => setError(null)}
            />
        </Container>
    )
}

export default connect(undefined, {userLogin, adminLogin})(Login)