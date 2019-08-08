<?php

namespace App\Http\Controllers;

use App\IntrantHasTransport;
use App\IntrantTransport;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class IntrantHasTransportController extends Controller
{
    function test($intrant)
    {
        $r = DB::table('intrants')
            ->select('nom_intrant')
            ->where('nom_intrant', '=', $intrant)
            ->first()
            ->nom_intrant;
        echo $r;


    }

    function poo($id)
    {
        echo $id;
        echo 'poo';

    }

    function addTransport(request $request, $id)
    {

        echo request('Origine');
        echo request('Destination');
        echo request('Transporteur');
        echo request('ChoixVehicule');
        $Transport = new IntrantTransport(); //table transport

        $Transport->Lib_origine = request('Origine');
        $Transport->Lib_destination = request('Destination');
        $Transport->UID = $id;
        $Transport->Nom_Transporteur = request('Transporteur');
        $Transport->Nb_km = request('Kilometrage');
        //$Transport->Co_transport = request('ChoixVehicule');


        $Transport->save();


    }

    function getTransport($id)
    {
        $g = array();
        $values = array();
        $r = DB::table('transport')
            ->where('UID', '=', $id)
            ->whereNotNull('UID')
            ->get();


        return $r;

    }
}


