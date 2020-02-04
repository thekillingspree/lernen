import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addVideo } from '../actions'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Appbar from '../components/Appbar';
import '../styles/form.css'
import { Snackbar } from '@material-ui/core';
import LoadingDialog from '../components/LoadingDialog';
import { history } from '../router';

const AddNewVideo = props => {

    const {addVideo, match: {params: {cid}}} = props;
    console.log(cid)
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const onFormSubmit = async () => {
        setLoading(true)
        const video = {
            name,
            url,
            cid
        }
        const error = await addVideo(video)
        console.log(error)
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
                    Add a Video
                </Typography>
                <form className="form big">
                    <TextField id="outlined-basic" label="Video Name" variant="outlined" 
                    value={name}
                    required
                    onChange={e => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Youtube URL" variant="outlined" 
                    value={url}
                    required
                    onChange={e => setUrl(e.target.value)}
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

export default connect(null, {addVideo})(AddNewVideo)
