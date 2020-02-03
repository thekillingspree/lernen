import React, {Component} from 'react';
import { CardActionArea } from '@material-ui/core';

var url ="";
const handleClick = (val) => {
    url = val;
};

export default class Video extends Component{

    render(){
        return(<div>
            <CardActionArea onClick={(e) => handleClick(this.props.url)}>{this.props.title}</CardActionArea>
        </div>
        
        )
    }
}