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
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { toggleTheme } from '../actions/theme';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ColorPicker from './ColorPicker';
import Button from '@material-ui/core/Button';
import { adminLogout, userLogout } from '../actions';
import { history } from '../router';

const UserList = props => (
    <List style={{width: 250}}>
        <ListItem button onClick={() => history.push('/dashboard')}>
            <ListItemIcon>
                <MenuBookIcon />
            </ListItemIcon>
            <ListItemText>Your Courses</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText>Take a Quiz</ListItemText>
        </ListItem>
        <ListItem button onClick={() => {
            history.push('/allcourses')
        }}>
            <ListItemIcon>
                <ExploreIcon />
            </ListItemIcon>
            <ListItemText>Explore</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button onClick={props.toggleTheme}>
            <ListItemIcon>
                {!props.theme.isDark ? <NightsStayIcon /> : <Brightness7Icon />}
            </ListItemIcon>
            <ListItemText>Toggle Theme</ListItemText>
        </ListItem>
        <ListItem button onClick={() => props.setColor(true)}>
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
        <ListItem button onClick={() => {
            props.userLogout()
            history.push('/login')
        }}>
            <ListItemIcon>
                <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
        </ListItem>
    </List>
)

const AdminList = props => (
    <List style={{width: 250}}>
        <ListItem button onClick={() => history.push('/admin/dashboard')}>
            <ListItemIcon>
                <MenuBookIcon />
            </ListItemIcon>
            <ListItemText>Your Courses</ListItemText>
        </ListItem>
        <ListItem button onClick={() => history.push("/admin/new")}>
            <ListItemIcon>
                <ExploreIcon />
            </ListItemIcon>
            <ListItemText>New Course</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button onClick={props.toggleTheme}>
            <ListItemIcon>
                {!props.theme.isDark ? <NightsStayIcon /> : <Brightness7Icon />}
            </ListItemIcon>
            <ListItemText>Toggle Theme</ListItemText>
        </ListItem>
        <ListItem button onClick={() => props.setColor(true)}>
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
        <ListItem button onClick={() => {
            props.adminLogout()
            history.push('/login')
        }}>
            <ListItemIcon>
                <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
        </ListItem>
    </List>
)

const Appbar = props => {

    const [drawer, setDrawer] = useState(false)
    const [color, setColor] = useState(false)
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
                    {props.user.token && <UserList setColor={setColor} {...props}/>}
                    {props.admin.token && <AdminList setColor={setColor} {...props}/>}
                </React.Fragment>
            </Drawer>
            <Dialog
                open={color}
                onClose={() => setColor(false)}
            >
                <DialogContent>
                    <DialogTitle>Choose Theme Color</DialogTitle>
                    <ColorPicker callback={() => {
                        setColor(false)
                        setDrawer(false)
                    }}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setColor(false)}>
                        CANCEL
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

const mapStateToProps = ({theme, user, admin}) => ({theme, user, admin})

export default connect(mapStateToProps, {toggleTheme, adminLogout, userLogout})(Appbar)
