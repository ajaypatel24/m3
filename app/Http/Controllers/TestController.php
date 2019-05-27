<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JavaScript;

class TestController extends Controller
{
    public function index()
    {
        JavaScript::put([
            'foo' => 'bar',
            'user' => User::first(),
            'age' => 29
        ]);

        return view('welcome');
    }
}
