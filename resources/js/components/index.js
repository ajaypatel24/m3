import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Example from "./Deprecated/Example";
import Navbar from "./Navigation";
import PrestartQuestion from "./FormComponents/PrestartQuestion";
import EnergyTableData from "./DataComponents/EnergyTableData";
import LandingPage from "./LandingPage";
import Loading from "./Authentication/Loading";
import ContactInformationData from "./DataComponents/ContactInformationData";
import NoMatch from "./Authentication/NoMatch";
import Dashboard from "./Dashboard";
import EnergyTable from "./FormComponents/EnergyTable";
import AboutUs from "./Authentication/Loading";

/**
 *
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 *
 * The const below created a ProtectedRoute Tag
 * which allows for the blocking of specific
 * routes contingent on whether the user is
 * logged in or not. This is done using a
 * localStorage parameter authenticated
 */


export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('authenticated') === 'true') {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }}
        />
    );
};

/**
 *
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 *
 * The const below created a ProtectedRoute Tag
 * which allows for the blocking of specific
 * routes contingent on whether the user is
 * logged in or not. This is done using a
 * localStorage parameter authenticated
 */

export const BlockRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('authenticated') === 'false') {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={
                        {
                            pathname: "/profile",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }}
        />
    );
};



/**
 *
 */


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            user: {}

        };
    }


    /**
     *
     * Full routing can be found below, index.js is the ReactJS
     * entry point of this application and has the ID root, this
     * can be reconfigured in the app.js file in the 'js' directory
     */

    render() {
        return (
            /*full routing found here*/
            <HashRouter>




                <Navbar />



                <Switch>

                    <ProtectedRoute exact path="/table" component={EnergyTable}/>
                    <BlockRoute exact path="/" component={Dashboard}/>
                    <BlockRoute exact path="/home" component={Dashboard}/>
                    <ProtectedRoute exact path="/data" component={EnergyTableData}/>
                    <ProtectedRoute path="/prestart_questions/" component={PrestartQuestion}/>
                    <ProtectedRoute path="/profile" component={LandingPage}/>


                    <ProtectedRoute exact path="/loading" component={Loading}/>
                    <ProtectedRoute exact path="/Contact" component={ContactInformationData}/>



                    <Route component={NoMatch}/>
                </Switch>

                {/* <Footer2/> */}


            </HashRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
