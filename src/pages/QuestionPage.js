import AnswerTabs from '../components/AnswerTabs';
import React, {Component} from 'react';
import { Container } from '@material-ui/core';

const CardDetails = [
    {color:"#846843", text:"lkdfhukg"},
    {color:"#836748", text:"oidfhguiuhsuid"},
    {color:"#985764", text:"usdhffds"},
    {color:"#984520", text:"slighd"}
]


const QuestParent = {
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "center",
    padding: "50px",
    fontSize: "32px",
    minHeight: "150px"
}

const container = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px"
}

export default class QuestionPage extends Component{
    render(){
        return(
        <div style={QuestParent}>
        <Container maxWidth="lg" style={container}>fafjgiaf</Container>
        {
            CardDetails.map((detail, index) => {
                return <AnswerTabs color={detail.color} text={detail.text} key={index} />
            })
        }
        </div>
        )
    }
}