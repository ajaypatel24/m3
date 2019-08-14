[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ce485bd5c4c047cd8962ff2ca1597927)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ajaypatel24/m3&amp;utm_campaign=Badge_Grade)

## Resources React (Front End)

**Load changes to project automatically** : `npm run watch`

**Load changes to project** : `npm run dev`

* **React Documentation** : https://reactjs.org/docs/getting-started.html 
* **Lodash** : https://lodash.com/ => Simplify javascript with functions 
* **React Router** : https://reacttraining.com/react-router/web/guides/quick-start => Routing for react
* **Redux** : https://redux.js.org/ => State management tool
* **React Formik** : https://github.com/jaredpalmer/formik => Form tool
* **PropType** : https://reactjs.org/docs/typechecking-with-proptypes.html => Type checking for properties
* **Prettier** : https://github.com/prettier/prettier => code formatter
* **Firebase** : https://firebase.google.com/docs/auth/web/start => Authentication and database
* **Moment** : https://momentjs.com/ => Time and date library
* **Heroku** : https://id.heroku.com/login => Temporary deployment solution 
* **React Bootstrap** : https://www.npmjs.com/package/react-bootstrap
* **Material UI** : https://material-ui.com/ => Google style components for pages 
* **React Intl** : https://github.com/formatjs/react-intl => Translation functionality
* **Codacy** : https://www.codacy.com/ => Automated code review 
* **React-Google-Charts** : https://www.npmjs.com/package/react-google-charts#bar-chart => Collection of data graphs

* **Laravel Forge** : https://forge.laravel.com/ => future server management
* https://laracasts.com/series/learn-laravel-forge/episodes/5
**Asynchronous Requests**: fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

**Testing** : Mocha (test runner), Chai (assertion), Enzyme (component tests) and Jest (snapshot tests)

## Resources Laravel (Front End)

**Laravel and dependencies** (COMPOSER) : https://laravel.com/docs/5.8/installation

**Running server** : `php artisan serve`

**Setuping server locally** :
1. `composer install`
2. `npm install`
3. rename .env.example to .env (it's in the root)
4. `php artisan key:generate`
5. `php artisan server` && `npm run watch`

**Best tutorial** : https://laracasts.com/series/laravel-from-scratch-2018

* **Laravel Documentation** : https://laravel.com/docs/5.8/installation
* **PHP to JS transformer** : https://github.com/laracasts/PHP-Vars-To-Js-Transformer => CAREFUL, very useful but set it up correctly read through the readme thoroughly.

**Laravel helpful bookmarks** : https://github.com/chiraggude/awesome-laravel <=== tons of GREAT stuff 


## Styling

**Responsiveness**:
CSS media query (applies certain props at certain width/height): https://www.w3schools.com/css/css_rwd_mediaqueries.asp
Inner.width property (JS) : can be used with conditional statement to render two different pages in react (pass it down as a prop from componenent to component, or use redux)
Bootstrap: integrated with tons of reponsive features

**Bootstrap React Doc** : https://react-bootstrap.github.io/

### To run project locally, no need for local server (XAMPP, WAMP...).
1. cd to project in two terminals
2. first terminal run `php artisan serve`
3. second terminal run `npm run watch` (if you want to make changes to the React Components)
4. open address listed under php artisan server (usually http://127.0.0.1:8000/)


**If .env is not included :**

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```
