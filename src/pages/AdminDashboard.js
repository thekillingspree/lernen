import React, {useEffect, useState} from 'react'
import Appbar from '../components/Appbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LessonCard from '../components/LessonCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { history } from '../router';
import { getAllCourses } from '../actions';
import { CircularProgress } from '@material-ui/core';


const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const LoaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 75vh;
`



const AdminDashboard = props => {
    
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect( () => {
        (async function xyz() {
            await setLoading(true)
            const cs = await props.getAllCourses()
            setCourses(cs)
            setLoading(false)
        })();
    }, [])
    return (
        <div>
            <Appbar />
            <Container>
                <Typography variant="h4" style={{margin: "30px 0"}}>
                    Your Lessons
                </Typography>
                {!loading &&<CardContainer>
                     {courses.map(lesson => <LessonCard onButtonClick={() => {
                        history.push(`/admin/${lesson._id.$oid}/add`)
                     }} buttonText="Add Video" {...lesson}/>)}
                </CardContainer>}
                {loading && <LoaderContainer> <CircularProgress size={24} color="secondary"/></LoaderContainer>}

            </Container>
        </div>
    )
}

export default connect(({user, admin})=> ({user, admin}), {getAllCourses})(AdminDashboard)
