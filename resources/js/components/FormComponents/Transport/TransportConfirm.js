import React from 'react';
import {Col, Form, Row, Button ,Table } from "react-bootstrap";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Helmet from 'react-helmet';

import Stepper from './Stepper'
import axios from "axios";
import CheckCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {makeStyles} from "@material-ui/core";
import {amber, green} from "@material-ui/core/colors";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";


/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */


const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const useStyles2 = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
export default class TransportConfirm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            TableData: [],
            UID: sessionStorage.getItem('UID'),
            Transport: '',

        };


        this.getSubmissions = this.getSubmissions.bind(this);
        this.getTableRows = this.getTableRows.bind(this);

    }
    CustomizedSnackbars() {
        const classes = useStyles2();
        const [open, setOpen] = React.useState(false);

        function handleClick() {
            setOpen(true);
        }

        function handleClose(event, reason) {
            if (reason === 'clickaway') {
                return;
            }

            setOpen(false);
        }

        return (
            <div>
                <Button variant="info" className={classes.margin} onClick={handleClick}>
                    Open success snackbar
                </Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <MySnackbarContentWrapper
                        onClose={handleClose}
                        variant="info"
                        message="Entry Deleted"
                    />
                </Snackbar>

            </div>
        );
    }
    MySnackbarContentWrapper(props) {
        const classes = useStyles1();
        const { className, message, onClose, variant, ...other } = props;
        const Icon = variantIcon[variant];

        return (
            <SnackbarContent
                className={clsx(classes[variant], className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
                        {message}
        </span>
                }
                action={[
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
                        <CloseIcon className={classes.icon} />
                    </IconButton>,
                ]}
                {...other}
            />
        );
    }



    componentWillMount = () => {
        this.getTableRows();
    }

    getSubmissions = () => {
        let id = sessionStorage.getItem('UID')
        axios.get('/transport/' + id,)
            .then(response => {
                this.setState({TableData: response.data})
                console.log("defined");

            });
    }

    clearState = () => {
        this.setState({
            Transport: "",
        })
    }
    handleInput(e) { //return value of button clicked
        e.preventDefault();
        let uid = this.state.UID;
        let transport = this.state.Transport;
        console.log('/deltransport/' + e.target.value + '/' + uid);
        fetch('/deltransport/' + e.target.value + '/' + uid, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                "Content-type": "application/json"
            }

        })
            .then(function (response) {
                console.log(response.data)


            })
            .catch(function (error) {
                console.log('Request failed', error);
                console.log("why");
            });



        this.getTableRows(); //get new table rows after deletion


    }



    getTableRows = () => {
        //let uid = sessionStorage.getItem('UID');
        let uid = this.state.UID;
        axios.get('/transport/' + uid)
            .then(response => {
                console.log(response.data);
                this.setState({TableData: response.data});
            });
    }




    render()
    {


        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <div>
                                <strong>Please confirm that the following information submitted is
                                    accurate</strong>

                                {

                                    this.state.TableData.map((rowdata, i) =>
                                        <div>
                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>Procede</th>
                                                    <th>Quantite an</th>
                                                    <th>Unite</th>
                                                    <th>Num Affiche</th>
                                                    <th>Procede</th>
                                                    <th>Quantite an</th>
                                                    <th>Unite</th>
                                                    <th>GES</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                {rowdata.map((subRowData, k) =>


                                                    <tr>

                                                        <td>{subRowData.TypeVehicule_idVehicule}</td>
                                                        <td>{subRowData.Categorie_idCategorie}</td>
                                                        <td>{subRowData.idDeplacement}</td>
                                                        <td>{subRowData.Libelle_Deplacement}</td>
                                                        <td>{subRowData.Nb_voyageurs}</td>
                                                        <td>{subRowData.Nb_voyageurs_An}</td>
                                                        <td>{subRowData.Type_Deplacement}</td>
                                                        <td>{subRowData.Emission_GES}</td>
                                                        <td><Button variant="outline-danger" value={subRowData.idDeplacement} onClick={e => this.handleInput(e, "value")}> Delete </Button></td>

                                                    </tr>
                                                )
                                                }

                                                </tbody>
                                            </Table>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




