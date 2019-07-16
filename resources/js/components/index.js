import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from "react-intl";
import App from "./App"
import { Button } from "react-bootstrap"
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Example from "./Deprecated/Example";
import Navbar from "./Navigation";
import PrestartQuestion from "./FormComponents/PrestartQuestion";
import EnergyTableData from "./DataComponents/EnergyTableData";
import Loading from "./Authentication/Loading";
import ContactInformationData from "./DataComponents/ContactInformationData";
import Dashboard from "./Dashboard";
import Login from "./LoginComponent";
import TopTabs from "./NavComponents/TopTabs";
import EnergyTable from "./FormComponents/EnergyTable"
import IntrantForm from "./FormComponents/IntrantForm"
import TransportForm from "./FormComponents/TransportForm"
import ContactInformationForm from "./FormComponents/ContactInformationForm"
import Team from "./ProfileComponents/Team"
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import fr from "react-intl/locale-data/fr"
import messages from "./messages"

import messages_de from "./fr.json";
import messages_en from "./en.json";


let lang = 'fr';
addLocaleData(en);
addLocaleData(fr);





    ReactDOM.render(
        <IntlProvider
            locale={lang}
            messages={messages[lang]}>
        <App/>
        </IntlProvider>, document.getElementById('root'));

