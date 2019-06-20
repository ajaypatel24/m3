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


/* Route::(method)('/path/', ControllerFileName@methodToExecute'); */


Route::get('/', 'LoginController@index');

//Route::post('/login', 'LoginController@login');

Route::post('/register', 'RegisterController@register');

Route::get('/prestart', 'PrestartController@index');

Route::get('/user/{Id}', 'PrestartController@search');
Route::get('/scian/{Id}', 'PrestartController@searchSCIAN');
Route::get('/name/{Id}', 'PrestartController@getName' );

Route::post('/','PrestartController@store'); /*method from php controller */
Route::post('/intrants', 'InventaireController@store');
Route::post('/categorie', 'CategorieController@store');
Route::get('/info', 'CategorieController@p');
Route::get('/data', 'PrestartController@p');

Route::get('/querytest', 'PrestartController@testQuery');







