import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { history } from '../router'
import { Form } from '../styles/login'
import {Paper, Tabs, Tab} from '@material-ui/core'
import '../styles/form.css'
import { connect } from 'react-redux'
import { adminSignup, userSignup } from '../actions'
import LoadingDialog from '../components/LoadingDialog';
import Snackbar from '../components/Snackbar';

const SignUp = props => {

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userValue, setUserValue] = useState("Student")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    
    const handleChange = (e, val) => {
        setUserValue(val)
    }

    const onFormSubmit = async e => {
        e.preventDefault();
        console.log(userValue)
        let error;
        setLoading(true)
        if (userValue === 'Student') {
            error = await props.userSignup(username, password, email, name)
        } else {
            error = await props.adminSignup(username, password, email, name)
        }
        setError(error)
        setLoading(false)
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
            <form onSubmit={onFormSubmit} className="form big">
            <TextField id="outlined-basic" label="Name *" variant="outlined" 
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <TextField id="outlined-basic" label="Email *" variant="outlined" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <TextField id="outlined-basic" label="Username *" variant="outlined" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <TextField id="outlined-basic" label="Password *" type="password" variant="outlined" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={onFormSubmit} style={{maxWidth: 100}} variant="contained" color="secondary">
                Login
            </Button>
            <Link href="#" onClick={() => history.push('/login')}>Already have an account? Login here.</Link>
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

export default connect(null, { adminSignup, userSignup })(SignUp)