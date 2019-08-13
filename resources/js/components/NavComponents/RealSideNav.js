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
import EnergyIcon from '@material-ui/icons/power';
import IntrantIcon from '@material-ui/icons/input';
import DataIcon from '@material-ui/icons/equalizer';
import ProcedeIcon from '@material-ui/icons/notes';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import TransportIcon from '@material-ui/icons/FlightLand';
import DechetIcon from '@material-ui/icons/Delete';
import LogoutIcon from '@material-ui/icons/PersonOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import BilanIcon from '@material-ui/icons/Assignment';
import Toolbar from'@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, HashRouter, Route } from 'react-router-dom'
import { red, amber } from "@material-ui/core/colors/red"

import '../../../sass/navstyle.css'

import '../animation.css'




/** find a way to place content of entire site within the main of this component */


import Navigation from "../Navigation"

const drawerWidth = 215;

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
        padding: theme.spacing(3), //padding between top    nav and content
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
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

                <h2>Inventaire</h2>
                {/*}
                <img

                    src={window.location.origin + "/img/cadet_logo.svg"}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Cadet Logo"
                />

                */}



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

                    <Link to="/EnergyTable" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoDo" >
                            <ListItemIcon ><EnergyIcon /></ListItemIcon>
                            <ListItemText primary="Energie" />
                        </ListItem>
                    </Link>

                    <Link to="/ProcessTable" style={{ textDecoration: 'none' }}>
                        <ListItem button key="Ecometrics">
                            <ListItemIcon><ProcedeIcon /></ListItemIcon>
                            <ListItemText primary="Procedes" />
                        </ListItem>
                    </Link>

                    <Link to="/intrant" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoAct">
                            <ListItemIcon><IntrantIcon /></ListItemIcon>
                            <ListItemText primary="Intrants" />
                        </ListItem>
                    </Link>

                    <Link to="/TransportSwitch" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoTest">
                            <ListItemIcon><TransportIcon /></ListItemIcon>
                            <ListItemText primary="Transport" />
                        </ListItem>
                    </Link>
                    <Link to="/dechet" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoReport">
                            <ListItemIcon><DechetIcon /></ListItemIcon>
                            <ListItemText primary="Dechets" />
                        </ListItem>
                    </Link>
                    <Link to="/AllData" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoReport">
                            <ListItemIcon><DataIcon /></ListItemIcon>
                            <ListItemText primary="Data" />
                        </ListItem>
                    </Link>
                    <Link to="/Bilan" style={{ textDecoration: 'none' }}>
                        <ListItem button key="EcoReport">
                            <ListItemIcon><BilanIcon /></ListItemIcon>
                            <ListItemText primary="Bilan" />
                        </ListItem>
                    </Link>



                </List>


                <Divider />
                <Link to="/contactinfo" style={{ textDecoration: 'none' }}>
                    <ListItem button key="Settings">
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </Link>

                <ListItem button key="Logout" onClick={handleLogout} color="secondary">
                    <ListItemIcon ><LogoutIcon/></ListItemIcon>
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

