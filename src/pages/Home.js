import React from 'react'
import {Button} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {history} from '../router'

const home = {
    backgroundColor : "#000" ,
    color : "#f50057",
    padding : "30px",
    alignSelf: "flex-end",
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
    color: '#fff'
}

const title = {
    fontSize: "60px",
    marginBottom : "-5px"
}


const Home = () => (<div style={home}>
    <div style={title} className="Title">Lernen</div>
    <div style={subtitle} className="Subtitle">An all new easy, hands-on and evolutionized way of learning!</div>
    <Button variant="outlined" onClick={history.push('/login')} color="secondary" >Get started!<ArrowForwardIosIcon fontSize="small" style={icon} /></Button>
</div>)

export default Home;