import FormBilan from '../DataComponents/Bilan'
import {FormattedHTMLMessage} from 'react-intl'
import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import EnergyTableEditData from "../DataComponents/EnergyTableEditData";
import IntrantEditData from "../DataComponents/IntrantEditData";

import Container from '@material-ui/core/Container';

/**giving errors, but actually syntactically correct */

const Compagnie = <FormattedHTMLMessage id="TopTabs.Compagnie"
                                        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                        description="Welcome header on app main page"
                                        values={{what: 'react-intl'}}/>

const Revenue = <FormattedHTMLMessage id="TopTabs.Revenue"
                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                      description="Welcome header on app main page"
                                      values={{what: 'react-intl'}}/>

const Energie = <FormattedHTMLMessage id="TopTabs.Energie"
                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                      description="Welcome header on app main page"
                                      values={{what: 'react-intl'}}/>

const Dechets = <FormattedHTMLMessage id="TopTabs.Dechets"
                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                      description="Welcome header on app main page"
                                      values={{what: 'react-intl'}}/>

const Matieres = <FormattedHTMLMessage id="TopTabs.Matieres"
                                       defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                       description="Welcome header on app main page"
                                       values={{what: 'react-intl'}}/>

const Productivite = <FormattedHTMLMessage id="TopTabs.Productivite"
                                           defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                           description="Welcome header on app main page"
                                           values={{what: 'react-intl'}}/>

const RH = <FormattedHTMLMessage id="TopTabs.RH"
                                 defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                 description="Welcome header on app main page"
                                 values={{what: 'react-intl'}}/>

const Risques = <FormattedHTMLMessage id="TopTabs.Risques"
                                      defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                      description="Welcome header on app main page"
                                      values={{what: 'react-intl'}}/>

const Bilan = <FormattedHTMLMessage id="TopTabs.Bilan"
                                    defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                    description="Welcome header on app main page"
                                    values={{what: 'react-intl'}}/>


export default class TopTabs extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }


    render() {
        return (

            <Container maxwidth="lg">
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({key})}
            >
                <Tab eventKey="Compagnie" title={Compagnie}>

                </Tab>

                <Tab eventKey="Revenus" title={Revenue}>

                </Tab>


                <Tab eventKey="Energie" title={Energie}>
                    {/* <EnergyTableData/> */}
                    <br/>
                    <Container maxwidth="lg">
                    <EnergyTableEditData/>
                    </Container>
                    <br/>

                </Tab>

                <Tab eventKey="Déchets" title={Dechets}>

                </Tab>

                <Tab eventKey="Matières" title={Matieres}>
                    <br/>
                    <Container maxwidth="lg">
                    <IntrantEditData />
                    </Container>
                    <br/>
                </Tab>

                <Tab eventKey="Productivité" title={Productivite}>

                </Tab>

                <Tab eventKey="RH" title={RH}>

                </Tab>

                <Tab eventKey="Risques" title={Risques}>

                </Tab>

                <Tab eventKey="Bilan" title={Bilan}>
                    <Container maxwidth="sm">
                     <FormBilan/>
                    </Container>
                    <br/>
                </Tab>

            </Tabs>
            </Container>
        );
    }
}