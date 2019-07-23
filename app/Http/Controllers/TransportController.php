<?php

namespace App\Http\Controllers;

use App\Deplacement;
use App\Transport;
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
    public function getLibelle ($category)
    { //returns all distinct transportation methods
        $array = [];
        $TransportMethods = DB::table('typevehicule')
            ->select('Lib_VehiculeEN')
            ->where('Type_transport', '=', $category)
            ->distinct()
            ->get();


        foreach ($TransportMethods as $value) { //array
            foreach ($value as $v) {
                $array[] = $v;
            }
        }




        return array_filter($array);


    }

    public function transportKilometrage(request $request) {
        $Transport = new Transport();
        $Transport->Type_Deplacement = request('Vehicule');
    }





    public function shortDeplacement(request $request) {
        $Transport = new Deplacement();

        $VehiculeId = DB::table('typevehicule')
            ->select('idVehicule')
            ->where('Lib_VehiculeEN', '=', request('Vehicule'))
            ->get();


        $r = '';
        foreach ($VehiculeId as $value) { //array
            foreach ($value as $v) {
                $r = $v;
            }
        }


        $Transport->TypeVehicule_idVehicule = $r;
        //$Transport->Inventaire_idInventaire = "-1";
        $Transport->Categorie_idCategorie = "cat30";



        $Transport->Libelle_Deplacement = request('VehiculeCat');
        $Transport->Origine = 't';
        $Transport->Destination = 't';
        $Transport->idDeplacement = 'D1';

        $Transport->Nb_km_AR = 1;
        $Transport->Nb_voyageurs_An = 1;
        $Transport->Nb_voyageurs = request('NombreVoitures');
        $Transport->Type_Deplacement = request('Vehicule');
        $Transport->Emission_GES = 123.1231232;
        $Transport->Type_Deplacement = request('Vehicule');
        $Transport->Covoiturage = 1;


        $Transport->save();




    }
}
