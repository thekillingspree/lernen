import React from 'react'
import Appbar from '../components/Appbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LessonCard from '../components/LessonCard';
import styled from 'styled-components';

const tempLessons = [
    {
        image: "https://cdn01.alison-static.net/courses/887/alison_courseware_intro_887.jpg",
        title: "Scripting with Javascript",
        description: "Learn how to program JavaScript applications for enhanced interactivity and functionality in web pages."
    },
    {
        image: "https://i.udemycdn.com/course/750x422/1780436_aa46.jpg",
        title: "React practice course",
        description: "The React practice course, learn by building projects. Including three full practice project, a landing page, a Firebase project and a fullstack with Mongo DB and Node."
    },
    {
        image: "https://udemy-images.udemy.com/course/480x270/1172996_0241_5.jpg",
        title: "The Complete React Native + Hooks Course",
        description: "Understand React Native with Hooks, Context, and React Navigation."
    },
    {
        image: "https://onlineitguru.com/wp-content/uploads/2018/07/blockchainn.png",
        title: "Blockchain Concepts",
        description: "Learn how to program JavaScript applications for enhanced interactivity and functionality in web pages."
    },
    {
        image: "https://i.udemycdn.com/course/750x422/1780436_aa46.jpg",
        title: "React practice course",
        description: "The React practice course, learn by building projects. Including three full practice project, a landing page, a Firebase project and a fullstack with Mongo DB and Node."
    },
    {
        image: "https://udemy-images.udemy.com/course/480x270/1172996_0241_5.jpg",
        title: "The Complete React Native + Hooks Course",
        description: "Understand React Native with Hooks, Context, and React Navigation."
    },
]

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`



const Dashboard = props => {
    return (
        <div>
            <Appbar />
            <Container>
                <Typography variant="h4" style={{margin: "30px 0"}}>
                    Your Lessons
                </Typography>
                <CardContainer>
                    {tempLessons.map(lesson => <LessonCard {...lesson}/>)}
                </CardContainer>
            </Container>
        </div>
    )
}

export default Dashboard
