import EnergyTableData from '../DataComponents/EnergyTableData'
import {FormattedHTMLMessage} from 'react-intl'

/**giving errors, but actually syntactically correct */

import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'


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
                onSelect={key => this.setState({key})}
            >
                <Tab eventKey="Compagnie" title=<FormattedHTMLMessage id="TopTabs.Compagnie"
                     defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                     description="Welcome header on app main page"
                     values={{what: 'react-intl'}}/>
                >


            </Tab>

            <Tab eventKey = "Revenus" title = <FormattedHTMLMessage id="TopTabs.Revenue" defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
                                      description="Welcome header on app main page"
                                      values={{what: 'react-intl'}}/> >

            < /Tab>


        <Tab eventKey="Energie" title=<FormattedHTMLMessage id = "TopTabs.Energie" defaultMessage = "Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
        description = "Welcome header on app main page"
        values = {
        {
            what: 'react-intl'
        }
    }
        />>
        <EnergyTableData/>

        < /Tab>

        <Tab eventKey="Déchets" title=<FormattedHTMLMessage id = "TopTabs.Dechets" defaultMessage = "Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
        description = "Welcome header on app main page"
        values = {
        {
            what: 'react-intl'
        }
    }
        />>

        </Tab>

        <Tab eventKey="Matières" title=<FormattedHTMLMessage id="TopTabs.Matieres"
        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
        description="Welcome header on app main page"
        values={{what: 'react-intl'}}/> >

        </Tab>

        <Tab eventKey="Productivité" title=<FormattedHTMLMessage id="TopTabs.Productivite"
        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
        description="Welcome header on app main page"
        values={{what: 'react-intl'}}/> >

        </Tab>

        <Tab eventKey="RH" title=<FormattedHTMLMessage id="TopTabs.RH"
        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
        description="Welcome header on app main page"
        values={{what: 'react-intl'}}/>>

        </Tab>

        <Tab eventKey="Risques" title=<FormattedHTMLMessage id="TopTabs.Risques"
        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
        description="Welcome header on app main page"
        values={{what: 'react-intl'}}/> >

        </Tab>

        <Tab eventKey="Bilan" title=<FormattedHTMLMessage id="TopTabs.Bilan"
        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
        description="Welcome header on app main page"
        values={{what: 'react-intl'}}/> >

        </Tab>

        </Tabs>
        );
        }
        }