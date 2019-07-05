<?php

namespace App\Http\Controllers;

use App\intrants;
use App\Intrant;

use App\TableInventaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class InventaireController extends Controller
{


    function index()
    {
        return view('welcome');
    }

    function store(request $request)
    {

        $TableInventaire = new TableInventaire();



    }

    function inventaireData($id) {

        $category = [
            0 => "GazNaturel",
            1 => "Propane",
            2 => "EssencePompe",
            3 => "GazolePompe",
            4 => "FioulDomestique",
            5 => "Mazout",
            6 => "Charbon",
            7 => "Cammionage",
            8 => "Electricite",
            9 => "Cammionage",
            10 => "Fossil",
            11 => "Biodiesel",
            12 => "Bois",
            13 => "Soudure",
            14 => "CNC",
            15 => "VapeurFroid",
            16 => "Vin",
            17 => "Biere",
            18 => "Halocarbunes",
            19 => "AutreMethane",
            20 => "N2OSol",
            21 => "N2OAnimaux",
            22 => "MethaneAnimaux",
            23 => "Coke",

        ];


        $g = array();
        $values = array();
        foreach ($category as $cat) {
            $TableData = DB::table('procede')
                ->where('uid', $id)
                ->where('Nom_procede', $cat)
                ->get();


            print_r($TableData);
            array_push($g,$TableData);



           foreach($g as $e) {
               foreach ($e as $r) {
                   if(!$r->Quantite_an == null) {
                       array_push($values, $e);
                   }
               }
           }
           }

        print_r($values);


        return $values;

    }

    function p() { //test method to see if data is retrieved from database
        $intrants = intrants::all()->toArray();

        return $intrants;


    }


    function addIntrant($id) {

        $Intrant = new Intrant();

            if (DB::table('intrants')
            ->where('nom_intrant', '=', request('NomIntrant'))
            ->where('UID', '=', $id)
            ->count() > 0) {

                echo "exists";


            }

            else {

                $Mod = request('Yearly');
                $Quantite = request('QuantiteAn');
                $freq = request('Frequency');

                if ($Mod == 'true') {

                    $Intrant->quantite_unitaire = $Quantite;

                    switch ($freq) {
                        case '1xY':
                            break;
                        case '2xY':
                            $Quantite = $Quantite * 2;
                            break;
                        case '3xY':
                            $Quantite = $Quantite * 3;
                            break;
                        case '4xY':
                            $Quantite = $Quantite * 4;
                            break;
                        case '2xM':
                            $Quantite = $Quantite * 6;
                            break;
                        case '6M':
                            $Quantite = $Quantite * 9;
                            break;
                        case '1xM':
                            $Quantite = $Quantite * 12;
                            break;
                        case '3W':
                            $Quantite = $Quantite * 16;
                            break;
                        case '2W':
                            $Quantite = $Quantite * 24;
                            break;
                        case '1W':
                            $Quantite = $Quantite * 48;
                            break;
                        case '3BD':
                            $Quantite = $Quantite * 82;
                            break;
                        case '2BD':
                            $Quantite = $Quantite * 125;
                            break;
                        case '1BD':
                            $Quantite = $Quantite * 250;
                            break;
                    }
                    $Intrant->quantite_an = $Quantite;
                    $Intrant->frequence = request('Frequency');
                }
                else {
                    $Intrant->quantite_an = request('QuantiteAn');
                }


                $Intrant->nom_intrant = request('NomIntrant');
                $Intrant->ressource = request('Ressource');
                $Intrant->duree_vie_immo = request('DureeVie');

                $Intrant->provenance = request('Provenance');
                $Intrant->NbTransport = request('NbTransport');
                $Intrant->unite = request('Unite');
                $Intrant->UID = $id;
                $Intrant->save();
            }
    }

    function getIntrant($id) {
        $intrants = DB::table('intrants')
            ->where('UID', $id)
            ->get();



        return $intrants;
    }


    function deleteIntrant($name, $id) {
        $intrants = DB::table('intrants');


        $intrants
            ->where('nom_intrant',$name)
            ->where('UID', $id)
            ->delete();
    }
}

