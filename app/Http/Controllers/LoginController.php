<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;


class LoginController extends Controller
{


    function index()
    {
        return view('welcome');
    }

    function login()
    {
        $uid = request('uid');
        $user = DB::table('register')->where('uid', $uid)->get();

        // return information needed for front page display etc...
    }


    function getName() {




    }


}
