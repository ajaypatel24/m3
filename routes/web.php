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


Route::get('/', 'LoginController@index');

//Route::post('/login', 'LoginController@login');

Route::post('/register', 'RegisterController@register');

Route::get('/prestart', 'PrestartController@index');

Route::get('/user/{Id}', 'PrestartController@search');
Route::get('/scian/{Id}', 'PrestartController@searchSCIAN');
Route::get('/name/{Id}', 'PrestartController@getName' );it

Route::post('/','PrestartController@prestartSave'); /*method from php controller */
Route::post('/intrants', 'InventaireController@store');
Route::post('/categorie', 'CategorieController@tableEnergySave');
Route::get('/info', 'CategorieController@p');
Route::get('/data', 'PrestartController@p');

Route::get('/querytest', 'PrestartController@testQuery');



Route::post('/contact/{Id}', 'RegisterController@contactInfo');

Route::get('/contact/{Id}', 'RegisterController@profileInfo');
Route::get('/inventaire/{Id}', 'InventaireController@inventaireData');

Route::post('/intrants/{Id}', 'InventaireController@addIntrant');

Route::get('intrants/{Id}', 'InventaireController@getIntrant');
Route::post('delIntrants/{name}/{id}', 'InventaireController@deleteIntrant');



