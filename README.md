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
* **Firebase** : https://firebase.google.com/docs/auth/web/firebaseui => Authentication (and database ?)
* **Moment** : https://momentjs.com/ => Time and date library

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
6. `php artisan server` && `npm run watch`

=> Make sure .env is in .gitignore, otherwise your database info will be shared to github when you push

**Best tutorial** : https://laracasts.com/series/laravel-from-scratch-2018

* **Laravel Documentation** : https://laravel.com/docs/5.8/installation
* **PHP to JS transformer** : https://github.com/laracasts/PHP-Vars-To-Js-Transformer => CAREFUL, very useful but set it up correctly read through the readme thoroughly.

**Laravel helpful bookmarks** : https://github.com/chiraggude/awesome-laravel <=== tons of GREAT stuff 


