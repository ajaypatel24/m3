<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;


class LoginController extends Controller
{


    function index()
    {
        return view('welcome');
    }

    /**
     * login function simply requests the UID and returns the entire row
     * the user is contains on based on their UID
     */
    function login()
    {
        $uid = request('uid');
        $user = DB::table('register')->where('uid', $uid)->get();

        // return information needed for front page display etc...
    }


    function getName() {




    }


}
