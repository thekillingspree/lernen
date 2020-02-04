import React, {Component} from 'react';
import Appbar from '../components/Appbar';
import {  CardContent, Divider, CircularProgress } from '@material-ui/core';
import { CardActionArea, Button } from '@material-ui/core';
import { getAllVideosForCourse } from '../actions';
import { getIDFromURL } from '../utils';
import styled from 'styled-components'
import { connect } from 'react-redux';

const handleClick = (url, title) => {
    document.getElementById('YtVideo').src = `https://youtube.com/embed/${getIDFromURL(url)}`;
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


const LoaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 75vh;
`
class VideoPages extends Component{
    
    state = {
        videos: [],
        loading: true
    }

    async componentDidMount() {
        this.setState({loading: true})
        const videos = await getAllVideosForCourse(this.props.match.params.cid)
        console.log(videos)
        this.setState({videos, loading: false})
    }

    render(){
        const {videos, loading} = this.state;
        return(
            <div>
                <Appbar></Appbar>
                {!loading && <div style={HorizontalContainer}>
                    <div>
                    <iframe title="Course video" style={{width: "90vh", height: "60vh", margin: "30px 20px 0 20px"}} id="YtVideo" width="560" height="315" src={`https://www.youtube.com/embed/${getIDFromURL(videos[0].url)}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div style={{...verticalcontainer, margin: "30px 20px 0 20px"}}>
                        <div style={{fontSize: "26px", marginBottom: "14px", fontWeight: "900px"}}>Topics</div>
                        <Divider />
                        {
                            videos.map((video, key) => {
                                return (<div>
                                            <CardActionArea key={key} onClick={(e) => handleClick(video.url, video.name)} style={{fontSize: "18px"}}>
                                <CardContent>#{key+1}. {video.name}</CardContent>
                                            </CardActionArea>
                                            <Divider />
                                        </div>)
                            })
                        }
                        <Button>Quiz for Lesson</Button>
                        {loading && <LoaderContainer>
                                <CircularProgress size={60}/>
                            </LoaderContainer>}
                    </div>    
                </div>}
            </div>
            
        )
    }
}


export default connect()(VideoPages)