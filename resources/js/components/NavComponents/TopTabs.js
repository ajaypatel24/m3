import EnergyTableData from '../DataComponents/EnergyTableData'



import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'


export default class TopTabs extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }

    render() {
        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
            >
                <Tab eventKey="Compagnie" title="Compagnie">

                </Tab>
                <Tab eventKey="Revenus" title="Revenus">

                </Tab>
                <Tab eventKey="Energie" title="Energie">
                    <EnergyTableData />
                </Tab>
                <Tab eventKey="Déchets" title="Déchets" >

                </Tab>
                <Tab eventKey="Matières" title="Matières" >

                </Tab>
                <Tab eventKey="Productivité" title="Productivité" >

                </Tab>
                <Tab eventKey="RH" title="RH" >

                </Tab>
                <Tab eventKey="Risques" title="Risques" >

                </Tab>
                <Tab eventKey="Bilan" title="Bilan" >

                </Tab>
            </Tabs>
        );
    }
}