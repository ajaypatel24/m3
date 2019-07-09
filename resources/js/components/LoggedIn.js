import React from 'react';
import {Button, Card, Col, Nav, Row, Tab, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {EnergyTable} from './EnergyTable';
import '../../sass/TabStyle.css'
import ContactInfo from "./ContactInfo";
import DynamicTable from "./DynamicTable";
import Transport from "./Transport";

const CityRegex = new RegExp("^[a-zA-Z]+$"); //
const AddressRegex = new RegExp("^[0-9]+ [A-z]+$"); //"civic number" "street name"
const PostalRegex = new RegExp("/^[a-z][0-9][a-z]\s?[0-9][a-z][0-9]$/");

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>

                    <Link to="/DynamicTable">
                        <ListItem button key="Hello">
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Boi" />
                        </ListItem>
                    </Link>

                </List>

                <List>

                    <Link to="/ContactInfo">
                        <ListItem button key="Hello">
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Boi" />
                        </ListItem>
                    </Link>

                </List>

                <List>

                    <Link to="/EnergyTable">
                        <ListItem button key="Hello">
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Boi" />
                        </ListItem>
                    </Link>

                </List>

                <List>

                    <Link to="/Transport">
                        <ListItem button key="Hello">
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Boi" />
                        </ListItem>
                    </Link>

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
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >

                


            </main>
        </div>
    );
}

class LoggedIn extends React.Component {


    constructor(props) {
        super(props); //required

        this.handleChange = this.handleChange.bind(this); //handle change function
        this.handleSubmit = this.handleSubmit.bind(this); //handle submit function

        this.state = {


            BusinessName: "",
            QuebecAddress: "",
            City: "",
            PostalCode: "",
            CorporateAddress: "",
            IncomeValue: "",
            EmployeeNumber: "",
            OfferToClient: "",
            SectorActivity: "",
            ClientBase: "",
            SCIAN22: false,
            DiffCorpAddress: "",
            validated: false,
            BusinessNameError: "",
            categories: []

        };
    }


    handleSubmit(e) {
        e.preventDefault();

        const data = this.state; //VERY IMPORTANT

        //checks all auth
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            fetch('/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    "Content-type": "application/json"
                }

            })
                .then(function (data) {
                    console.log('Request succeeded with JSON response', data);
                })
                .catch(function (error) {
                    console.log('Request failed', error);
                });

        }
        this.setState(({validated: true}));
        console.log(data);


    };

    handleChange(e) {
        { /* = e => */
        }


        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    };

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    showHideDiv(corpAddress) {
        var box = document.getElementById("corpAddress");
        box.style.display = checkCorp.checked ? "block" : "none";

    }

    handleCheck() {
        if (this.state.DiffCorpAddress != "") {
            console.log(this.state.DiffCorpAddress);
            return true;
        }
        return false;
    }


    formValid() {
        const {
            BusinessName, QuebecAddress,
            City, PostalCode, CorporateAddress
        } = this.state;

        let g = BusinessName && QuebecAddress &&
            City && PostalCode && CorporateAddress;


        console.log(g);
        return g
        //Object.values(formErrors).forEach(val => {val.length > 0 && (valid = false);
    };


    render() {


        return (







            <div>


                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>

                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="test">Inventaire</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="test">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Inventaire</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    Realiser votre inventaire de vos depenses energetiques, procedes,
                                                    intrants, etc. et calculer les emissions annuelles de votre activite
                                                </Card.Text>

                                                <EnergyTable></EnergyTable>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Contact Information</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    Please fill in all required information before accessing
                                                    our services
                                                </Card.Text>


                                                <ContactInfo/>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Intrants</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    Fill in the required information
                                                </Card.Text>

                                                <Table>


                                                    <tbody>
                                                    <DynamicTable> </DynamicTable>
                                                    </tbody>


                                                </Table>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Col sm="{4}">
                                        <Card>
                                            <Card.Header as="h5">Intrants</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    Fill in the required information
                                                </Card.Text>


                                                <Transport></Transport>


                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>


            </div>


        );

    }
}



