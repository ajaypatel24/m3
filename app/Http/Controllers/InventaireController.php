<?php

namespace App\Http\Controllers;

use App\intrants;
use App\Intrant;

use App\TableInventaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Class InventaireController
 * @package App\Http\Controllers
 *
 * Everything related to inventaire is handled in this controller
 */
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

    /**
     * @param $id
     * @return array
     *
     * returns an array of all the inventaire Data based on
     * the UID provided in the method header
     */
    function inventaireData($id) {

        // all categories
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


        /*returns an array of every category with their values and unites associated
         with a specified user */
        $g = array();
        $values = array();

            $g = DB::table('procede')
                ->where('uid', $id)
                ->whereNotNull('Quantite_an') //amazing query
                ->get();

            array_push($values, $g );







            //attempt at returning only values that are pertinent to the user (non null)


        $ArrayReturn = array();
           foreach($values as $e) {
                       array_push($ArrayReturn, $e);
                   }






        return $g;


    }

    function p() { //test method to see if data is retrieved from database
        $intrants = intrants::all()->toArray();
        return $intrants;


    }


    /**
     * @param $id
     * add an intrant to the database based on user id
     *
     */
    function addIntrant($array, $uid) {
        $parameters =  json_decode($array); //decodes array to add parameters to database

        foreach ($parameters as $e) {
            echo $e;
            echo "\n";
        }



        $Intrant = new Intrant();

        //returns exists if intrant with the same name
            if (DB::table('intrants')
            ->where('nom_intrant', '=', $parameters[0])
            ->where('UID', '=', $uid)
            ->count() > 0) {

                echo "exists";
            }

            else {

                $r = DB::table('ressource')
                    ->select('idRessource')
                    ->where('Nom_RessourceFR', '=', 'Fertilisant 1')
                    ->first()
                    ->idRessource;

                $CoeffCC = DB::table('ressource')
                    ->select('Score_CC_uni')
                    ->where('idRessource', '=', $r)
                    ->first()
                    ->Score_CC_uni;


                $Intrant->idIntrant = $parameters[0];
                $Mod = $parameters[4]; //per delivery or yearly
                $Quantite = $parameters[1];
                $freq = $parameters[6];
                echo $freq;
                echo "\n";
                echo $Mod;

                if ($Mod == 'true') { //per delivery specified

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
                    $Intrant->GES_annuel = $CoeffCC * $Quantite;

                }
                else { //yearly specified
                    $Intrant->quantite_an = $parameters[1];
                    $Intrant->GES_annuel = $CoeffCC * $parameters[1];
                }




                //adding rest of values to database

                    $Intrant->Ressource_idressource = $r;
                $Intrant->nom_intrant = $parameters[0];
                $Intrant->ressource = request('Ressource');
                $Intrant->duree_vie_immo = request('DureeVie');

                $Intrant->provenance = $parameters[5];
                $Intrant->NbTransport = $parameters[3];
                $Intrant->unite = $parameters[2];
                $Intrant->UID = $uid;
                $Intrant->save();
            }
    }

    function addIntrantBackup($id) {
        $parameters =  json_decode($id); //decodes array to add parameters to database

        foreach ($parameters as $e) {
            echo $e;
            echo "\n";
        }

        $Intrant = new Intrant();

        //returns exists if intrant with the same name
        if (DB::table('intrants')
                ->where('nom_intrant', '=', request('NomIntrant'))
                ->where('UID', '=', $id)
                ->count() > 0) {

            echo "exists";
        }

        else {

            $r = DB::table('ressource')
                ->select('idRessource')
                ->where('Nom_RessourceFR', '=', 'Fertilisant 1')
                ->first()
                ->idRessource;

            $CoeffCC = DB::table('ressource')
                ->select('Score_CC_uni')
                ->where('idRessource', '=', $r)
                ->first()
                ->Score_CC_uni;


            $Intrant->idIntrant = request('NomIntrant');
            $Mod = request('Yearly'); //per delivery or yearly
            $Quantite = request('QuantiteAn');
            $freq = request('Frequency');

            if ($Mod == 'true') { //per delivery specified

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
                $Intrant->GES_annuel = $CoeffCC * $Quantite;

            }
            else { //yearly specified
                $Intrant->quantite_an = request('QuantiteAn');
                $Intrant->GES_annuel = $CoeffCC * request('QuantiteAn');
            }




            //adding rest of values to database

            $Intrant->Ressource_idressource = $r;
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
    /**
     * @param $id
     * @return \Illuminate\Support\Collection
     *
     * function takes uid and returns list of users
     * intrants stored
     */
    function getIntrant($id) {
        $intrants = DB::table('intrants')
            ->where('UID', $id)
            ->get();



        return $intrants;
    }

    function editIntrant($NameData, $Nom, $Quantite, $Unite, $uid ) {
        if (DB::table('intrants')
                ->where('nom_intrant', '=', $Nom)
                ->where('UID', '=', $uid)
                ->count() > 0) {

            echo $Nom;


        }
        else {
            return DB::table('intrants')
                ->where('nom_intrant', '=', $NameData)
                ->where('UID', '=', $uid)
                ->update([
                    'nom_intrant' => $Nom,
                    'quantite_an' => $Quantite,
                    'unite' => $Unite
                ]);

        }
    }


    /**
     * @param $name
     * @param $id
     *
     * deletes specific intrant from the database associated
     * with a specific user ID
     *
     */
    function deleteIntrant($name, $id) {
        $intrants = DB::table('intrants');


        $intrants
            ->where('nom_intrant',$name)
            ->where('UID', $id)
            ->delete();
    }
}

