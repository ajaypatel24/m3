<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * General form for adding a route specified below
 *
 * Route::(method)('/path/', ControllerFileName@methodToExecute');
 * method: GET or POST
 *
 */
/*  */

/* Login Controller */
Route::get('/', 'LoginController@index'); //deprecated

/* Register Controller */
Route::post('/register', 'RegisterController@register'); //register new user


Route::get('/transportdata', 'TransportController@getDropDown');
Route::get('/libelledata/{category}', 'TransportController@getLibelle');
/* Prestart Controller */
Route::get('/prestart2', 'PrestartController@index');
Route::get('/user/{Id}', 'PrestartController@search'); //gets email address
Route::get('/scian/{Id}', 'PrestartController@searchSCIAN'); //gets Scian from prestart questions
Route::get('/name/{Id}', 'PrestartController@getName' ); //gets name of user
Route::get('/initial/{Id}', 'PrestartController@getInitial' ); //gets name of user
Route::get('/data', 'PrestartController@p');
Route::post('/prestart','PrestartController@prestartSave'); /*method from php controller */
Route::get('/querytest', 'PrestartController@testQuery');

/* Inventaire Controller */
Route::post('/intrants', 'InventaireController@store');
Route::post('/intrants/{Id}', 'InventaireController@addIntrant'); //add new intrant
Route::get('intrants/{Id}', 'InventaireController@getIntrant'); //gets intrants
Route::get('/inventaire/{Id}', 'InventaireController@inventaireData'); //gets energy table data
Route::post('delIntrants/{name}/{id}', 'InventaireController@deleteIntrant'); //delete single intrant

/* Categorie Controller */
Route::post('/categorie', 'CategorieController@tableEnergySave');
Route::get('/info', 'CategorieController@p');

/* Register Controller */
Route::post('/contact/{Id}', 'RegisterController@contactInfo'); //add extra user info
Route::get('/contact/{Id}', 'RegisterController@profileInfo'); //gets all user info






Route::get('/test/', 'CategorieController@getEnergyCategory');






