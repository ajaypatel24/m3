<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    function index()
    {
        return view('welcome');
    }

    function login()
    {
        $email = request('email');
        $pass = request('password');

        echo('email :' . $email);
        echo('password :' . $pass);

        return null;
    }
}
