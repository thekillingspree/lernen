import React, {Component} from 'react';
import Appbar from '../components/Appbar'

const container = {
    display: "flex"
}

export default class VideoPages extends Component{
    render(){
        return(
            <div>
                <Appbar></Appbar>
                <iframe style={{display: "block", marginRight: "30px", marginTop: '30px', marginLeft: "30px", width: "120vh", height: "70vh"}} width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            
        )
    }
}