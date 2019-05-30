<?php

namespace App\Http\Controllers;

class SignUpController extends Controller
{
    function signUp()
    {
        $name = request('name');
        $organization = request('organization');
        $email = request('email');
        $password = request('password');

        echo("email : " . $name);
        echo("org : " . $organization);
        echo("email : " . $email);
        echo("password : " . $password);

    }
}
