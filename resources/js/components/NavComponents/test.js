import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, HashRouter, Route } from 'react-router-dom'
import { red, amber } from "@material-ui/core/colors/red"

import '../../../sass/navstyle.css'




/** find a way to place content of entire site within the main of this component */


import Navigation from "../Navigation"

const drawerWidth = 240;

import grey from '@material-ui/core/colors/grey'


const primary = grey[500];





const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

}));

function handleLogout () {
    firebase.auth().signOut().then(function () {
        console.log(firebase.auth().currentUser);
    });


    window.location.href = '#/';
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('UID');
    sessionStorage.removeItem('name');
    window.location.reload();

}

function callbackFunction (childata) {
    console.log(childata);
    return childata;
}

export default function ResponsiveDrawer(props) {
    const { container } = props;
    const { children } = props;

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
        console.log(mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                {/*
                <img

                    src={window.location.origin + "/img/cadet_logo.svg"}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Cadet Logo"
                />
                */}

                <h2> EcoSystem </h2 >
            </div>
            <Divider />
            <HashRouter>
                <List>
                    <Link to="/home"  style={{ textDecoration: 'none' }}>
                        <ListItem button key="Home">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link to="/prestart_questions" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoDo" >
                            <ListItemIcon ><MailIcon color="secondary" /></ListItemIcon>
                            <ListItemText primary="EcoDo" />
                        </ListItem>
                    </Link>

                    <Link to="/route" style={{ textDecoration: 'none' }}>
                        <ListItem button key="Ecometrics">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Ecometrics" />
                        </ListItem>
                    </Link>

                    <Link to="/intrant" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoAct">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="EcoAct" />
                        </ListItem>
                    </Link>

                    <Link to="/transport" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoTest">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="EcoTest" />
                        </ListItem>
                    </Link>
                    <Link to="/EnergyTable" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoReport">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="EcoReport" />
                        </ListItem>
                    </Link>
                    <Link to="/ProcessTable" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoComm">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="EcoComm" />
                        </ListItem>
                    </Link>
                    <Link to="/transport" style={{ textDecoration: 'none' }}>
                        <ListItem button key="Chat Room">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Chat Room" />
                        </ListItem>
                    </Link>
                    <Link to="/transport" style={{ textDecoration: 'none' }}>
                        <ListItem button key="Calendar">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Calendar" />
                        </ListItem>
                    </Link>
                    <Link to="/transport" style={{ textDecoration: 'none' }}>
                        <ListItem button key="Documents">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Documents" />
                        </ListItem>
                    </Link>


                </List>


                <Divider />
                <Link to="/contactinfo" style={{ textDecoration: 'none' }}>
                    <ListItem button key="Settings">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </Link>

                <ListItem button key="Logout" onClick={handleLogout} color="secondary">
                    <ListItemIcon color="secondary"><MailIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary="Logout" color="secondary" />
                </ListItem>

            </HashRouter>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                {/*
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>


                </Toolbar>
                */}
                <Navigation parentMethod={handleDrawerToggle}/>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>

            </AppBar>
            <nav className={classes.drawer} aria-label="Mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

