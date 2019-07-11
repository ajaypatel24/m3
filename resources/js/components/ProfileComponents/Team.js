import {Col, Row, Form, InputGroup} from "react-bootstrap";
import React from "react";
import axios from 'axios/index';

/**
 * Contact information of current user displayed here before
 * or after they fill out required contact info, access
 * by clicking on profile dropdown item
 */

export default class ContactInformationData extends React.Component {


    constructor(props) {
        super(props); //required


        this.state = {

            profile: [],
            TableData: [],

        };
    }


    /**
     * Contact fills out their information which much be displayed somewhere for reference
     * Here, the UID is retrieved from session storage and used to access the users information
     * from the /contact route controller method call. The data retrieved in then placed in the
     * profile state array for access
     */
    componentDidMount() {
        let uid = sessionStorage.getItem('UID');
        console.log(uid);
        axios.get('/contact/' + uid)
            .then(response => {
                this.setState({profile: response.data});

            });

    }



    render() {

        return (

            <div>

                    <p>members from the same company will go here</p>

            </div>


        );

    }
}



