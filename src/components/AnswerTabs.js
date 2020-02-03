import React, {Component} from 'react';
import { Card, CardContent } from '@material-ui/core';

const card = {
    fontSize : "17px",
    padding : "3px",
    width: "290px",
    minHeight: "120px",
    marginTop : "40px",
    marginRight : "40px",
    marginLeft : "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}


export default class AnswerTabs extends Component{
    render(){
        return(
            <Card style={{...card, backgroundColor:this.props.color}}>
                <CardContent>
                    {this.props.text}
                </CardContent>
            </Card>
        )
    }
}