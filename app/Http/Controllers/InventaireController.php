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
        foreach ($category as $cat) {
            $TableData = DB::table('procede')
                ->where('uid', $id)
                ->where('Nom_procede', $cat)
                ->get();


            array_push($g,$TableData);


        }


        return $g;

    }

    function p() { //test method to see if data is retrieved from database
        $intrants = intrants::all()->toArray();

        return $intrants;


    }


    function addIntrant($id) {


            if (DB::table('intrants')
            ->where('nom_intrant', '=', request('NomIntrant'))
            ->where('UID', '=', $id)
            ->count() > 0) {

                echo "exists";


            }

            else {
                $Intrant = new Intrant();
                $Intrant->nom_intrant = request('NomIntrant');
                $Intrant->quantite_an = request('QuantiteAn');
                $Intrant->ressource = request('Ressource');
                $Intrant->duree_vie_immo = request('DureeVie');
                $Intrant->frequence = request('Frequency');
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

