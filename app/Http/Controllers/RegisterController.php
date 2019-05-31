<?php

namespace App\Http\Controllers;

use App\Register;

use JavaScript;

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

        JavaScript::put([
            'name' => $register->name
        ]);
    }
}
