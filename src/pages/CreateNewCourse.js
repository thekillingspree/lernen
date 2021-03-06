import React, {useState} from 'react'
import { connect } from 'react-redux'
import { createCourse } from '../actions'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Appbar from '../components/Appbar';
import '../styles/form.css'
import { Snackbar } from '@material-ui/core';
import LoadingDialog from '../components/LoadingDialog';
import { history } from '../router';
const CreateNewCourse = props => {

    const {createCourse} = props;

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const onFormSubmit = async () => {
        
        const course = {
            name,
            description,
            imageURL
        }
        if (!name || !description || !imageURL)
            return setError("Please fill all the fields.")
            setLoading(true)
        const error = await createCourse(course)
        setError(error && error.error)
        if (!error) 
            history.push('/admin/dashboard')
        setLoading(false)
    }

    return (
        <div>
            <Appbar />
            <Container>
                <Typography variant="h4" style={{margin: "30px 0"}}>
                    Start a new Course
                </Typography>
                <form className="form big">
                    <TextField id="outlined-basic" label="Course Name" variant="outlined" 
                    value={name}
                    required
                    onChange={e => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Course Image" variant="outlined" 
                    value={imageURL}
                    required
                    onChange={e => setImageURL(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Description" variant="outlined" 
                    value={description}
                    multiline
                    rows="4"
                    required
                    onChange={e => setDescription(e.target.value)}
                    />
                    <Button onClick={onFormSubmit} style={{maxWidth: 100}} variant="contained" color="secondary">
                        Submit
                    </Button>
                </form>
                <LoadingDialog open={loading} title="Creating Course"/>
            <Snackbar
            variant="error"
            open={error}
            message={error}
            onClose={() => setError(null)}
            />
            </Container>
        </div>
    )
}

export default connect(null, {createCourse})(CreateNewCourse)
