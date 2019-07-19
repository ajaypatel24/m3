import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from "react-intl";
import App from "./App"
import Test from "./NavComponents/test"
import Login from "./LoginComponent";
import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import fr from "react-intl/locale-data/fr"
import messages from "./messages"




let lang = 'fr';
addLocaleData(en);
addLocaleData(fr);





    ReactDOM.render(
        <IntlProvider
            locale={lang}
            messages={messages[lang]}>

            {
                !sessionStorage.getItem('authenticated') ?

                    <Login/>
                    :


                    <Test>
                        <App/>
                    </Test>
            }
        </IntlProvider>, document.getElementById('root'));

