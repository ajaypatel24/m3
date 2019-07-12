<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransportController extends Controller
{
    public function getDropDown ()
    { //returns all distinct transportation methods
        $array = [];
        $TransportMethods = DB::table('typevehicule')
            ->select('Type_transport')
            ->distinct()
            ->get();

        foreach ($TransportMethods as $value) {
            $array[] = $value->Type_transport;
        }



        return $array;


    }
    public function getLibelle ()
    { //returns all distinct transportation methods
        $array = [];
        $TransportMethods = DB::table('typevehicule')
            ->select('Lib_VehiculeEN')
            ->distinct()
            ->get();


        foreach ($TransportMethods as $value) { //array
            foreach ($value as $v) {
                $array[] = $v;
            }
        }




        return array_filter($array);


    }
}
