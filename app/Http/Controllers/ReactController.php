<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * Class ReactController
 * @package App\Http\Controllers
 *
 * React controller to control landing page
 */

class ReactController extends Controller
{
    public function show () {
        return view('LandingPage');
    }

}
