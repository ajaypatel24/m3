import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SideNavigation() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <Link to="/profile">
                    <ListItem button key="Home">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>

                <Link to="/prestart_questions">
                    <ListItem button key="Prestart Questions">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Prestart Questions" />
                    </ListItem>
                </Link>

                <Link to="/EnergyTable">
                    <ListItem button key="Energy Table">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Energy Table" />
                    </ListItem>
                </Link>

                <Link to="/intrant">
                    <ListItem button key="Intrants">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Intrants" />
                    </ListItem>
                </Link>

                <Link to="/transport">
                    <ListItem button key="Transportation">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Transportation" />
                    </ListItem>
                </Link>


            </List>


            <Divider />
            <Link to="/contactinfo">
                <ListItem button key="Contact Information">
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary="Contact Information" />
                </ListItem>
            </Link>
        </div>
    );

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}><ListIcon /></Button>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {sideList('left')}
            </SwipeableDrawer>
        </div>
    );
}