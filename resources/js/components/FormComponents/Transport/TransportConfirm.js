import React from 'react';
import {Col, Form, Row, Button  } from "react-bootstrap";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Helmet from 'react-helmet';

import Stepper from './Stepper'
import axios from "axios";

/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */
export default class TransportConfirm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            TableData: '',

        };


        this.getSubmissions = this.getSubmissions.bind(this);


    }


    getSubmissions = () => {
        axios.get('/dep/' ,)
            .then(response => {
                this.setState({TableData: response.data})
                console.log("defined");

            });
    }

    componentWillMount = () => {
        axios.get('/dep/' ,)
            .then(response => {
                this.setState({TableData: response.data})
                console.log("defined");

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
                                <p>{this.state.TableData}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
