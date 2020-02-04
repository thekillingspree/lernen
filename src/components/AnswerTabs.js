import React, {Component} from 'react';
import { CardContent, CardActionArea } from '@material-ui/core';

const card = {
    fontSize : "27px",
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
    borderRadius: "6px"
}


export default class AnswerTabs extends Component{
    render(){
        return(
            <CardActionArea style={{...card, backgroundColor:this.props.color}}>
                <div style={{color: "#fff6", fontSize: "40px", marginBottom: "-10px"}}>{this.props.option}</div>
                <CardContent style={{color: "#fff"}}>
                    {this.props.text}
                </CardContent>
            </CardActionArea>
        )
    }
}