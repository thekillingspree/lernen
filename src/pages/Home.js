import React from 'react'
import {Button} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {history} from '../router'

const home = {
    backgroundColor : "#000" ,
    color : "#f50057",
    padding : "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh"
}

const subtitle = {
    fontSize: "22px",
    color : "#f50057" ,
    marginBottom: "20px",
    color: "#fff"
}

const icon = {
    opacity: "70%",
    
}

const title = {
    fontSize: "60px",
    marginBottom : "-5px"
}


const Home = () => (
<div style={home}>
    <div style={title} className="Title">Lernen</div>
    <div style={subtitle} className="Subtitle">An all new easy, hands-on and revolutionized way of learning!</div>
    <Button style={{maxWidth: 200}} variant="outlined" onClick={() => history.push('/login')} color="secondary" >Get started!<ArrowForwardIosIcon fontSize="small" color="secondary" /></Button>
</div>)

export default Home;