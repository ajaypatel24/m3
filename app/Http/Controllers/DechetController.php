<?php

namespace App\Http\Controllers;

use App\Dechet;
use Illuminate\Http\Request;

class DechetController extends Controller
{
    public function addDechet(request $request) {

       $Dechet = new Dechet();

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
