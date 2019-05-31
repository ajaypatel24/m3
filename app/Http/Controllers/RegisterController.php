<?php

namespace App\Http\Controllers;

use App\Register;

class RegisterController extends Controller
{
    function register()
    {
        $register = new Register();

        $register->uid = request('uid');
        $register->name = request('name');
        $register->organization = request('organization');
        $register->email = request('email');

        $register->save();
    }
}
