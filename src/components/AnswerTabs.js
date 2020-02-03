import React, {Component} from 'react';
import { Card, CardContent, CardActionArea } from '@material-ui/core';

const card = {
    fontSize : "32px",
    padding : "30px",
    width: "400px",
    minHeight: "150px",
    marginTop : "60px",
    marginRight : "40px",
    marginLeft : "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px"
}


export default class AnswerTabs extends Component{
    render(){
        return(
            <CardActionArea style={{...card, backgroundColor:this.props.color}}>
                <CardContent>
                    {this.props.text}
                </CardContent>
            </CardActionArea>
        )
    }
}