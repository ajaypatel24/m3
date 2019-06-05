import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'ap1.auth0.com',
        clientID: 'GkqXEoUmBZ4Ucga00XCTNsMw8sYrSba1',
        redirectUri: 'http://localhost:8000/callback',
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor () {
        this.login = this.login.bind(this);
    }
    login() {
        this.auth0.authorize();
    }
}