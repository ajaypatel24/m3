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
* **Firebase** : https://firebase.google.com/docs/auth/web/firebaseui => Gpogle and Facebook Authentication
* **Moment** : https://momentjs.com/ => Time and date library
* **ReCaptcha** : https://www.google.com/recaptcha/intro/v3.html
            => setting up local server : https://stackoverflow.com/questions/3232904/using-recaptcha-on-localhost

**Asynchronous Server-Side Requests**: fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
https://developers.google.com/web/updates/2015/03/introduction-to-fetch <= Good resource

**Testing** : Mocha (test runner), Chai (assertion), Enzyme (component tests) and Jest (snapshot tests)

Error : class-property not supported
https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

## Resources Laravel (Back End)

**Laravel and dependencies** (COMPOSER) : https://laravel.com/docs/5.8/installation

**Running server** : `php artisan serve`

## Resources MySQL (Database)

**MySQL Doc**: https://dev.mysql.com/doc/

**HeidiSQL**: https://www.heidisql.com/ (GUI MySQL management)

**SQL tutorial**: https://lagunita.stanford.edu/courses/DB/2014/SelfPaced/about

if your using PHPStorm, remember there is a tab to the right that allows to view databases with tables inside

**Setuping server locally (no need for xampp, wamp, mamp, etc...)** :
1. `composer install`
2. `npm install`
3. rename .env.example to .env (it's in the root)
4. `php artisan key:generate`
5. In .env set DB CONFIG settings to your database, user and name
6. `php artisan migrate` (potentially run seeding command, if you have test data loaded, or predefined data)
7. `php artisan server` && `npm run watch`

=> Make sure .env is in .gitignore, otherwise your database info will be shared to github when you push

**Best tutorial** : https://laracasts.com/series/laravel-from-scratch-2018

* **Laravel Documentation** : https://laravel.com/docs/5.8/installation
* **PHP to JS transformer** : https://github.com/laracasts/PHP-Vars-To-Js-Transformer => CAREFUL, very useful but set it up correctly read through the readme thoroughly.

**Laravel helpful bookmarks** : https://github.com/chiraggude/awesome-laravel <=== tons of GREAT stuff 

**Login Authentication Tutorial Used** : https://auth0.com/blog/creating-your-first-laravel-app-and-adding-authentication/

If .env is not included :
`APP_NAME=Laravel
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
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"`
