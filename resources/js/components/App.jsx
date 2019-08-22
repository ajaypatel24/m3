import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrestartQuestion from "./FormComponents/PrestartQuestion";

import ContactInformationData from "./DataComponents/ContactInformationData";

import Login from "./LoginComponent";

import EnergyTable from "./FormComponents/EnergyTable"
import ContactInformationForm from "./FormComponents/ContactInformationForm"
import Team from "./ProfileComponents/Bilan"
import ProcessTable from "./FormComponents/ProcessTable"
import Test from "./NavComponents/RealSideNav"
import PageNotFound from "./Authentication/PageNotFound"
import en from "react-intl/locale-data/en"
import fr from "react-intl/locale-data/fr"
import TransportFormLongDistance from "./FormComponents/Transport/TransportFormLongDistance";
import TransportFormShortDistanceSpecific from "./FormComponents/Transport/TransportShortDistanceSpecific";
import TransportFormShortDistanceGeneral from "./FormComponents/Transport/TransportShortDistanceGeneral";
import TransportEntry from "./FormComponents/Transport/TransportEntry";
import Navigation from "./Navigation";
import TransportMarchandises from "./DataComponents/TransportMarchandises";
import IntrantEditData from "./DataComponents/IntrantEditData";
import IntrantForm from "./FormComponents/IntrantForm";

import DechetDirect from "./FormComponents/DechetDirect";
import UtilisationFDV from "./FormComponents/UtilisationFDV";



import DataComponent from "./DataComponents/DataComponent"
import ForgotPassword from "./Authentication/ForgotPassword";
import GraphTest from "./DataComponents/GraphComponent/GraphTest"
import BackgroundImage from "./DataComponents/GraphComponent/BackgroundImage";
import TransportTabSwitch from "./FormComponents/TransportTabSwitch";
import IntrantTransportForm2 from "./FormComponents/IntrantTransportForm2";
import UserSetup from "./FormComponents/UserSetup";
import Settings from "./ProfileComponents/Settings"





export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: '',
        }

    }

    switch = () => {
        if (localStorage.getItem('lang') === 'fr') {
            localStorage.setItem('lang', 'en');
        } else if (localStorage.getItem('lang') === 'en') {
            localStorage.setItem('lang', 'fr');
        } else {
            localStorage.setItem('lang', 'en');
        }

        window.location.reload();

    }


    /**
     *
     * Full routing can be found below, index.js is the ReactJS
     * entry point of this application and has the ID root, this
     * can be reconfigured in the app.js file in the 'js' directory
     */


    render() {
        let q = sessionStorage.getItem('authenticated');
        return (

            <div>
                <HashRouter>


                    {!q ?


                        null

                        :

                        null
                    }


                    <Switch>




                        <BlockRoute exact path="/login" component={Login}/>
                        <PrivateRoute exact path="/forgot" component={ForgotPassword} />



                        <PrivateRoute exact path="/home" component={UserSetup}/>
                        <PrivateRoute exact path="/IntrantTransport" component={IntrantTransportForm2}/>
                        <PrivateRoute exact path="/TransportSwitch" component={TransportTabSwitch} />
                        <PrivateRoute exact path="/TransportMarchandises" component={TransportMarchandises}/>
                        <PrivateRoute exact path="/prestart_questions/" component={PrestartQuestion}/>
                        <PrivateRoute exact path="/" component={GraphTest}/>
                        <PrivateRoute exact path="/EnergyTable" component={EnergyTable}/>
                        <PrivateRoute exact path="/ProcessTable" component={ProcessTable}/>
                        <PrivateRoute exact path="/intrant" component={IntrantForm}/>
                        <PrivateRoute exact path="/contactinfo" component={ContactInformationForm}/>


                        <Route exact path="/background" component={BackgroundImage} />
                        <Route exact path="/test" component={Test}/>


                        <Route exact path="/Graph" component={GraphTest}/>

                        <PrivateRoute exact path="/Settings" component={Settings} />
                        <PrivateRoute exact path="/Contact" component={ContactInformationData}/>
                        <PrivateRoute exact path="/team" component={Team}/>
                        <PrivateRoute exact path="/transport" component={TransportEntry}/>
                        <PrivateRoute exact path="/:transport/general/short"
                                      component={TransportFormShortDistanceGeneral}/>
                        <PrivateRoute exact path="/:transport/specific/short"
                                      component={TransportFormShortDistanceSpecific}/>


                        <PrivateRoute exact path="/:transport/long" component={TransportFormLongDistance}/>
                        <PrivateRoute exact path="/dechet" component={DechetDirect}/>
                        <PrivateRoute exact path="/AllData" component={DataComponent}/>
                        <PrivateRoute exact path="/FDV" component={UtilisationFDV}/>

                        <PrivateRoute exact path="/UserSetup" component={GraphTest} />
                        <Route exact path="/Edit" component={IntrantEditData}/>


                        <Route component={PageNotFound}/>


                    </Switch>

                    {/* <Footer2/> */}


                </HashRouter>

            </div>


        );
    }
}

/**
 *
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 *
 * The consts below create a PrivateRoute and BlockedRoute Tag
 * which allows for the blocking of specific routes contingent
 * on whether the user is logged in or not. This is done using a
 * sessionStorage parameter authenticated
 */

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                sessionStorage.getItem('authenticated') === 'true' ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
}

export const Home = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                sessionStorage.getItem('authenticated') === null ? (
                    <p></p>
                ) : <p/>

            }
        />
    );
}

/**
 *
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 *
 * The const below created a PrivateRoute Tag
 * which allows for the blocking of specific
 * routes contingent on whether the user is
 * logged in or not. This is done using a
 * sessionStorage parameter authenticated
 */


export const BlockRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                sessionStorage.getItem('authenticated') === 'false' || sessionStorage.getItem('authenticated') === null ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
};


/**
 *
 */
