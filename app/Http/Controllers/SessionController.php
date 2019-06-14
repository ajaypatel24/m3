<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
    public function showProfile(Request $request) {
        $value = $request->session()->all();

        echo $value;
    }
}
