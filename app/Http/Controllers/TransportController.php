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
            ->where('Type_transport', '!=', 'Journalier')
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
            ->where('Lib_VehiculeEN','!=', "")
            ->distinct()
            ->get();


        foreach ($TransportMethods as $value) { //array
            foreach ($value as $v) {
                $array[] = $v;
            }
        }




        return $array;


    }

    public function transportKilometrage(request $request) {
        $Transport = new Transport();
        $Transport->Type_Deplacement = request('Vehicule');
    }





    public function shortDeplacement(request $request) {
        $Transport = new Deplacement();
        $Random = mt_rand(1,100);
        $InttoString = intval($Random);

        $VehiculeId = DB::table('typevehicule') //ideal query to extract a single value
            ->select('idVehicule')
            ->where('Lib_VehiculeEN', '=', request('Vehicule'))
            ->first()
            ->idVehicule;


        $CoeffGES = DB::table('typevehicule')
            ->select('Coeff_GES_km')
            ->where('Lib_VehiculeEN', '=', request('Vehicule'))
            ->first()
            ->Coeff_GES_km;

        $Transport->TypeVehicule_idVehicule = $VehiculeId;
        //$TransportEntry->Inventaire_idInventaire = "-1";
        $Transport->Categorie_idCategorie = "cat30";




        $Transport->Libelle_Deplacement = 'Journalier';
        $Transport->Origine = 't';
        $Transport->Destination = 't';
        $Transport->idDeplacement = $VehiculeId.$InttoString;
        $Transport->UID = request('UID');
        $Transport->Nb_km_AR = request('Kilometres');
        $Transport->Nb_voyageurs_An = 1;
        $Transport->Nb_voyageurs = request('NombreVoitures');
        $Transport->Type_Deplacement = request('Vehicule');

        $Transport->Type_Deplacement = request('Vehicule');
        $Transport->Covoiturage = 1;

        $Transport->Emission_GES = request('Kilometres') * request('NombreVoitures') * 1 * $CoeffGES;



        $Transport->save();




    }


    public function getSubmissions($id) {



        $g = array();
        $values = array();

            $g = DB::table('deplacement')
                ->where('UID', $id)
                ->get();

            array_push($values, $g);







        //attempt at returning only values that are pertinent to the user (non null)


        $ArrayReturn = array();
        foreach($values as $e) {
            array_push($ArrayReturn, $e);
        }




        return $ArrayReturn;
    }

    function deleteTransport($transport, $id) {
        $Deplacement =
            DB::table('deplacement')
            ->where('idDeplacement',$transport)
            ->where('UID', $id)
            ->delete();
    }



}
