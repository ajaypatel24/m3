<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * Class SessionController
 * @package App\Http\Controllers
 *
 * not used, but might be useful in the future
 */
class SessionController extends Controller
{
    public function showProfile(Request $request) {
        $value = $request->session()->all();

        echo $value;
    }
}
