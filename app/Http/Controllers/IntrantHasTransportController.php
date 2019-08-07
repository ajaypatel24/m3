<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class IntrantHasTransportController extends Controller
{
    function test($intrant) {
        $r = DB::table('intrants')
            ->select('nom_intrant')
            ->where('nom_intrant', '=', $intrant)
            ->first()
            ->nom_intrant;
        echo $r;


    }

    function poo($id) {
        echo $id;
        echo 'poo';
    }
}
