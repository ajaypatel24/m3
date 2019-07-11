import React from 'react';
import {Col, Form, Row, Jumbotron} from "react-bootstrap";

/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */
export default class TransportForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            NumAffiche: "",
            NomIntrant: "",
            QuantiteAn: "",
            Ressource: "",
            Immobilisation: "",
            DureeVie: "",
            NbTransport: "",
            Unite: "",
            Provenance: "",
            Frequency: "",
            Yearly: "",
            Delete: true,
            UID: sessionStorage.getItem('UID'),
            rows: [],

        };

        this.formChange = this.formChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTableRows = this.getTableRows.bind(this);
        this.changeDelete = this.changeDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    componentWillMount = () => {
        this.getTableRows();
    }


    /*
    fixQuantity = () => {
        console.table([this.state.Yearly, this.state.Frequency]);


        }
    }

*/

    clearState = () => {
        this.setState({
            NumAffiche: "",
            NomIntrant: "",
            QuantiteAn: "",
            Ressource: "",
            Immobilisation: "",
            DureeVie: "",
            NbTransport: "",
            Unite: "",
            Provenance: "",
            Frequency: "",
        })
    }


    formChange = idx => e => {
        const {name, value} = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };


    handleDelete(e) {
        e.preventDefault();
        let uid = this.state.UID;
        let intrant = this.state.NomIntrant;
        fetch('/delIntrants/' + intrant + '/' + uid, {
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


        this.getTableRows();
        this.clearState();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
    }

    getTableRows = () => {
        //let uid = sessionStorage.getItem('UID');
        let uid = this.state.UID;
        axios.get('/intrants/' + uid)
            .then(response => {
                console.log(response.data);
                this.setState({rows: response.data});
            });
    }

    changeDelete = () => {
        this.setState({Delete: !this.state.Delete})
        console.log(this.state.Delete);
    }

    handleSubmit(e) {
        e.preventDefault();


        //VERY IMPORTANT
        const data = this.state;
        //checks all auth
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }


        let id = sessionStorage.getItem('UID');


        console.table([data]);
        fetch('/intrants/' + id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                "Content-type": "application/json"
            }

        })
            .then(function (response) {
                console.log(response.data)
                console.log('Request succeeded with JSON response', data);


            })
            .catch(function (error) {
                console.log('Request failed', error);
                console.log("why");
            });

        this.getTableRows();
        this.clearState();



    }



    handleAddRow = () => {
        const item = {
            name: "",
            mobile: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };

    render()
    {
        const {validated} = this.state;
        return (



            <Row>
                <Col lg="7">
            <Form>
                <Form.Group>
                    <Form.Label>Transport</Form.Label>
                    <Row>
                        <Col lg="5">
                <Form.Control
                name="Transport"
                onChange={this.handleChange}
                placeholder='tester'
                />
                        </Col>
                        <Col lg="7">
                    <Form.Control
                        name="Transport"
                        onChange={this.handleChange}
                        placeholder='tester'
                    />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col lg="4">
                    <Form.Control
                        name="Transport"
                        onChange={this.handleChange}
                        placeholder='tester'
                    />
                        </Col>
                        <Col lg="3">
                    <Form.Control
                        name="Transport"
                        onChange={this.handleChange}
                        placeholder='tester'
                    />
                        </Col>
                        <Col lg="5">
                            <Form.Control
                                name="Transport"
                                onChange={this.handleChange}
                                placeholder='tester'
                            />
                        </Col>
                    </Row>

                </Form.Group>
            </Form>
                </Col>

                <Col lg="5">
                    <Jumbotron>text gooes here</Jumbotron>
                </Col>
            </Row>







        );

    }

}
