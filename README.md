+## Resources React (Front End)

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

**Asynchronous Requests**: fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

**Testing** : Mocha (test runner), Chai (assertion), Enzyme (component tests) and Jest (snapshot tests)

## Resources Laravel (Front End)

**Laravel and dependencies** (COMPOSER) : https://laravel.com/docs/5.8/installation

**Running server** : `php artisan serve`

+**Setuping server locally** :
1. `composer install`
2. `npm install`
3. rename .env.example to .env (it's in the root)
4. `php artisan key:generate`
5. `php artisan server` && `npm run watch`

**Best tutorial** : https://laracasts.com/series/laravel-from-scratch-2018

* **Laravel Documentation** : https://laravel.com/docs/5.8/installation
* **PHP to JS transformer** : https://github.com/laracasts/PHP-Vars-To-Js-Transformer => CAREFUL, very useful but set it up correctly read through the readme thoroughly.

**Laravel helpful bookmarks** : https://github.com/chiraggude/awesome-laravel <=== tons of GREAT stuff 


### To run project locally, no need for local server (XAMPP, WAMP...).
1. cd to project in two terminals
2. first terminal run `php artisan serve`
3. second terminal run `npm run watch` (if you want to make changes to the React Components)
4. open address listed under php artisan server (usually http://127.0.0.1:8000/)
