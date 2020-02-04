import AnswerTabs from '../components/AnswerTabs';
import React, {Component} from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../components/Appbar';

const CardDetails = [
    {color:"#C81912", option: "A", text:"lkdfhukg"},
    {color:"#fddb3a", option: "B", text:"oidfhguiuhsuid"},
    {color:"#192965", option: "C", text:"usdhffds"},
    {color:"#52de97", option: "D", text:"slighd"}
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
    padding: "20px",
    borderRadius: "4px"
}

export default class QuestionPage extends Component{
    render(){
        return(
        <div>
            <Appbar></Appbar>
            <div style={QuestParent}>
            <Container maxWidth="lg" style={container}>fafjgiaf</Container>
            {
                CardDetails.map((detail, index) => {
                    return <AnswerTabs color={detail.color} option={detail.option} text={detail.text} key={index} />
                })
            }
            </div>
        </div>
        )
    }
}