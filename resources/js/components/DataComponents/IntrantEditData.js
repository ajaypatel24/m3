import React from 'react'
import MaterialTable from 'material-table'
import axios from "axios/index";
import {Form} from "react-bootstrap";
{/*
                <option value="kg">Kg</option>
                <option value="t">Ton</option>
                <option value="L">L</option>
                <option value="m3">m3</option>
                <option value="lbs">lbs</option>
                <option value="tm">Ton (metric)</option>
                <option value="gal">Gal</option>
                <option value="bac240L">Dumpster (240L)</option>
                <option value="bac360L">Dumpster (360L)</option>
        <option value="VC">Cubic Yards</option>
        <option value="teqCO2">GHG (Ton)</option>
        <option value="kgeqCO2">GHG (Kg)</option>
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
        { title: 'GES (kg)', field: 'GES_annuel', editable: 'never'},


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