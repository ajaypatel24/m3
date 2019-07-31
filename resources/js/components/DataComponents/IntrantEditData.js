import React from 'react'
import MaterialTable from 'material-table'
import axios from "axios/index";
import {Form} from "react-bootstrap";
{/*
                <option value="1xY"> Once per year</option>
                                                <option value="2xY"> Twice per year</option>
                                                <option value="3xY"> Three times per year</option>
                                                <option value="4xY"> Four times per year</option>
                                                <option value="2xM"> Every two Months</option>
                                                <option value="6W"> Every six weeks</option>
                                                <option value="1xM"> Every month</option>
                                                <option value="3W"> Every three weeks</option>
                                                <option value="2W"> Every two weeks</option>
                                                <option value="1W"> Every week</option>
                                                <option value="3BD"> Every Three business days</option>
                                                <option value="2BD"> Every Two business days</option>
                                                <option value="1BD"> Each business day</option>
        */}

export default class IntrantEditData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            columns: [
                { title: 'Procede', field: 'nom_intrant' },
                { title: 'Quantite', field: 'quantite_an' },
                { title: 'Unite', field: 'unite' ,

                lookup: {
                kWh: 'kWh',
                MWh: 'MWh',
                    kg: 'kg',
                    Ton: 'Ton',
                    TonMetric: 'Ton (metric)',
                    L: 'L',
                    m3: 'm^3',
                    lbs: 'lbs',
                    Gal: 'gal',
                    bac240L: 'Dumpster (240L)',
                    bac360L: 'Dumpster (360L)',
                    VC: 'cubic yard',
                    teqCO2L: 'GHG (ton)',
                    kgeqCO2L: 'GHG (kg)',


                },
                },
                { title: 'Frequence', field: 'y',

                    lookup: {
                        true: 'Yearly',
                        false: 'Per Delivery'


                    },
                },
                { title: 'Nombre de Transports', field: 'NbTransport'},
                { title: 'Provenance', field: 'provenance'},
                { title: "Frequence d'Achat", field: 'FreqAchat',
                    lookup: {
                        '1xY': "Once per year",
                        '2xY': "Twice per year",
                        '3xY': "Three per year",
                        '4xY': "Four per year",
                        '2xM': "Every two Months",
                        '6W': "Every six weeks",
                        '1xM': "Every month",
                        '3W': "Every three weeks",
                        '2W': "Every two weeks",
                        '1W': "Every week",
                        '3BD': "Every Three business days",
                        '2BD': "Every Two business days",
                        '1BD': "Every business day",
                    },
                },




            ],


            Rows: [],
        }
    }

    componentWillMount() {

        let uid = sessionStorage.getItem('UID');
        axios.get('/intrants/' + uid)
            .then(response => {
                console.log(response.data);
                console.log('poog');
                this.setState({Rows: response.data});
            });


        console.log(this.state.Rows);
    }

    getTableRows = () => {
        //let uid = sessionStorage.getItem('UID');
        let uid = this.state.UID;
        axios.get('/intrants/' + uid)
            .then(response => {
                console.log(response.data);
                this.setState({Rows: response.data});
            });
    }

    render() {
        return (
            <MaterialTable
                title="Intrants"
                columns={this.state.columns}
                data={this.state.Rows}
                editable={{



                   onRowAdd: newData =>
                       new Promise((resolve, reject) => {
                           setTimeout(() => {
                               {
                                   const data = this.state.Rows;
                                   data.push(newData);
                                   this.setState({ data }, () => resolve());
                                   let id = sessionStorage.getItem('UID');
                                   const data2 = newData;


                                   console.log(newData);

                                   var h = [];

                                   h.push(newData.nom_intrant);
                                   h.push(newData.quantite_an);
                                   h.push(newData.unite);
                                   h.push(newData.NbTransport)
                                   h.push(newData.y);
                                   h.push(newData.provenance);
                                   h.push(newData.FreqAchat)



                                   fetch('/intrants/' + JSON.stringify(h) , {
                                       method: 'POST',
                                       body: JSON.stringify(data2),
                                       headers: {
                                           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                                           "Content-type": "application/json"
                                       }

                                   })
                                       .then(function (response) {
                                           console.log(response.data2)
                                           console.log('Request succeeded with JSON response', data2);


                                       })
                                       .catch(function (error) {
                                           console.log('Request failed', error);
                                           console.log("why");
                                       });
                               }
                               resolve()
                           }, 1000)
                       }),


                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = newData;
                                    const NameData = oldData.nom_intrant;
                                    var Q_an = data.quantite_an
                                    var Nom = data.nom_intrant
                                    let id = sessionStorage.getItem('UID');
                                    let Unite = data.unite
                                    const data2 = this.state.Rows;
                                    const index = data2.indexOf(oldData);
                                    data2[index] = newData;
                                    console.log(data);

                                    this.setState({ data }, () => resolve());
                                    fetch('/EditIntrant/' + NameData + '/' + Nom + '/' + Q_an + '/' + Unite + '/' + id,{
                                        method: 'POST',
                                        body: JSON.stringify(data),
                                        headers: {
                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                                            "Content-type": "application/json"
                                        }

                                    })
                                        .then(function (response) {
                                            console.log(response.data);
                                            console.log('Request succeeded with JSON response', response);


                                        })
                                        .catch(function (error) {

                                            console.log('Request failed', error);
                                            console.log("why");
                                        });
                                }
                                resolve()
                            }, 1000)
                        }),

                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    let data2 = this.state.Rows;
                                    const index = data2.indexOf(oldData);
                                    data2.splice(index, 1);
                                    this.setState({ data2 }, () => resolve());
                                    let data = oldData;
                                    let nom = data.nom_intrant
                                    console.log(nom);
                                    let uid = sessionStorage.getItem('UID');

                                    fetch('/delIntrants/' + nom + '/' + uid, {
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
                                }
                                resolve()
                            }, 100)
                        }),




                }}



            />
        )
    }
}