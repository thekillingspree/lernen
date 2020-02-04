import React, {Component} from 'react';
import Appbar from '../components/Appbar';
import {  CardContent, Divider } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';

const videoDetails = [
    {title:"#0 JavaScript Tutorial | Introduction", url: "https://youtube.com/embed/uDwSnnhl1Ng"},
    {title:"#1 JavaScript Tutorial | Why you should Learn JavaScript Today", url: "https://youtube.com/embed/uxWO8Sd8PoY"},
    {title:"#2 JavaScript Tutorial | What is Dom? | Document Object Model", url: "https://youtube.com/embed/_GxpmQ54aqg"},
    {title:"#3 JavaScript Tutorial | First Hello World Program", url: "https://youtube.com/embed/I5xesmmiREU"},
    {title:"#4 JavaScript Tutorials | Statements and comments", url: "https://youtube.com/embed/vWX2eoi3bOc"}
];

const handleClick = (url, title) => {
    document.getElementById('YtVideo').src = url;
    document.getElementById('title').innerText = title;
}

const HorizontalContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
}

const verticalcontainer = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
}

export default class VideoPages extends Component{
    render(){
        return(
            <div>
                <Appbar></Appbar>
                <div style={HorizontalContainer}>
                    <div>
                    <iframe style={{width: "90vh", height: "60vh", margin: "30px 20px 0 20px", boxShadow: "2px 2px 1px 1px #f0efdf"}} id="YtVideo" width="560" height="315" src="https://www.youtube.com/embed/uDwSnnhl1Ng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p id="title" style={{fontWeight: "600", margin: "7px 0 0 20px", fontSize: "18px"}}>#0 JavaScript Tutorial | Introduction</p>
                    </div>
                    <div style={{...verticalcontainer, margin: "30px 20px 0 20px"}}>
                        <div style={{fontSize: "26px", marginBottom: "14px", fontWeight: "900px"}}>Topics</div>
                        <Divider />
                        {
                            videoDetails.map((video, key) => {
                                return (<div>
                                            <CardActionArea key={key} onClick={(e) => handleClick(video.url, video.title)} style={{fontSize: "18px"}}>
                                                <CardContent>{video.title}</CardContent>
                                            </CardActionArea>
                                            <Divider />
                                        </div>)
                            })
                        }
                    </div>    
                </div>
            </div>
            
        )
    }
}