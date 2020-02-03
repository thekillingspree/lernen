import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExploreIcon from '@material-ui/icons/Explore';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import PaletteIcon from '@material-ui/icons/Palette';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { toggleTheme } from '../actions/theme';


const Appbar = props => {

    const [drawer, setDrawer] = useState(false)

    return (
        <React.Fragment>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={() => setDrawer(!drawer)} aria-label="menu">
                <MenuIcon />
                </IconButton>
                <h2 style={{flexGrow: 1}}>{props.title || 'Lernen'}</h2>
                <IconButton>
                    <AccountCircle color="inherit"/>
                </IconButton>
            </Toolbar>
            </AppBar>
            <Drawer 
            style={{minWidth: 300}}
            open={drawer}
            onOpen={() => setDrawer(true)}
            onClose={() => setDrawer(false)}>
                <React.Fragment>
                <List style={{width: 250}}>
                    <ListItem button>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText>Lessons</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <QuestionAnswerIcon />
                        </ListItemIcon>
                        <ListItemText>Take a Quiz</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ExploreIcon />
                        </ListItemIcon>
                        <ListItemText>Topics</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={props.toggleTheme}>
                        <ListItemIcon>
                            <NightsStayIcon />
                        </ListItemIcon>
                        <ListItemText>Toggle Theme</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PaletteIcon />
                        </ListItemIcon>
                        <ListItemText>Color Theme</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText>Your Account</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <MeetingRoomIcon />
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </ListItem>
                </List>
                </React.Fragment>
            </Drawer>
        </React.Fragment>
    )
}

export default connect(null, {toggleTheme})(Appbar)
