import React, {useEffect, useState} from 'react'
import Appbar from '../components/Appbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LessonCard from '../components/LessonCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { history } from '../router';
import { getAllCourses, enrollUser } from '../actions';
import { CircularProgress } from '@material-ui/core';
import LoadingDialog from '../components/LoadingDialog';


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



const Explore = props => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)
    const [dialog, setDialog] = useState(false)
    const {getAllCourses} = props;
    useEffect( () => {
        (async function xyz() {
            setLoading(true)
            const cs = await getAllCourses()
            console.log(cs)
            setCourses(cs)
            setLoading(false)
        })();
    }, [])
    return (
        <div>
            <Appbar />
            <Container>
                <Typography variant="h4" style={{margin: "30px 0"}}>
                    Course Catalog
                </Typography>
                {!loading &&<CardContainer>
                     {courses.map(lesson => <LessonCard buttonText="Enroll" onButtonClick={async () => {
                            setDialog(true)
                            await props.enrollUser(lesson._id.$oid)
                            history.push(`/${lesson._id.$oid}/learn/`)
                            setDialog(false)

                     }} {...lesson}/>)}
                </CardContainer>}
                {loading && <LoaderContainer> <CircularProgress size={24} color="secondary"/></LoaderContainer>}
            </Container>
            <LoadingDialog open={dialog} title="Enrolling to Course"/>
        </div>
    )
}

export default connect(({user, admin})=> ({user, admin}), {getAllCourses, enrollUser})(Explore)
