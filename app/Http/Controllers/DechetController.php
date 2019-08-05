<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DechetController extends Controller
{
    public function addDechet(request $request) {

        $Procede = new Procede();

        echo 'hihi';
        echo request('Incineration');

    }

    public function getDechet($uid) {
        return true;
    }

    public function editDechet($uid) {
     return true;
    }
}
