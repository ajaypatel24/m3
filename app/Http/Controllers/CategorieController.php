<?php

namespace App\Http\Controllers;

use App\categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CategorieController extends Controller
{


    function index()
    {
        return view('welcome');
    }

    /**
     * @param Request $request
     */

    function isTableComplete($id)
    {


    }

    function getEnergyCategory()
    { //add language support (parameter passed lang from localStorage)
        $array = [];
        $array2 = [];
        $category = DB::table('categorie')
            ->select('Nom_CategorieEN')
            ->where('Partie_InventaireEN', '=', 'Energy')
            ->distinct()
            ->get();


        foreach ($category as $v) {
            $array[str_replace(' ', '', $v->Nom_CategorieEN)] = $v->Nom_CategorieEN;
        }


        array_push($array2, $array); //to be able to apply .map in frontend
        return $array2;
    }


    function tableEnergySave(request $request)
    {


        $Random = mt_rand(1, 100);
        $InttoString = intval($Random);

        $categorie = new categorie();


        $DatabaseCat = [
            "GazUnite" => "Natural Gas",
            "PropaneUnite" => "Propane",
            "EssenceUnite" => "Gasoline",
            "GazoleUnite" => "Diesel",
            "FioulUnite" =>"Domestic Fuel Oil",
            "MazoutUnite" => "Light Fuel Oil",
            "CharbonUnite" => "Coal",
            "ElectriciteUnite" => "Electricity",
            "BiodieselUnite" =>"Biodiesel",
            "BoisUnite" => "Wood/Logs/Sawdust",
            "SoudureUnite" => "Welding",
            "UsinageUnite" => "CNC Machining Turning",
            "VapeurUnite" => "Cold Vapor",
            "VinUnite" =>"Fermenting Wine",
            "BiereUnite" => "Gasification of Beer",
            "HaloUnite" => "Halocarbons/Other",
            "AutreMethaneUnite" =>"Other Methane",
            "N2OSolUnite" => "N2O Fertilizer ",
            "N2OAnimauxUnite" => "N2O Animals",
            "MethaneAnimauxUnite" => "Animal Methane",
            "CokeUnite" => "Coke",

            ];


            $category = [
                "GazUnite" => "GazNaturel",
                "PropaneUnite" => "Propane",
                "EssenceUnite" => "EssencePompe",
                "GazoleUnite" => "GazolePompe",
                "FioulUnite" => "FioulDomestique",
                "MazoutUnite" => "MazoutLeger",
                "CharbonUnite" => "Charbon",
                "ElectriciteUnite" => "TotalElectricite",
                "BiodieselUnite" => "Biodiesel",
                "BoisUnite" => "Bois",
                "SoudureUnite" => "Soudure",
                "UsinageUnite" => "CNC",
                "VapeurUnite" => "VapeurFroid",
                "VinUnite" => "Vin",
                "BiereUnite" => "Biere",
                "HaloUnite" => "Halocarbunes",
                "AutreMethaneUnite" => "AutreMethane",
                "N2OSolUnite" => "N2OSol",
                "N2OAnimauxUnite" => "N2OAnimaux",
                "MethaneAnimauxUnite" => "MethaneAnimaux",
                "CokeUnite" => "Coke",

            ];


        $id = $categorie->UID = request('UID');


        $user = DB::table('procede')->where('UID', $id)->value('UID');
        if ($user === null) {


            $data = array();

            foreach ($category as $unit => $cat) {


                echo $DatabaseCat[$unit];

                    $Key = DB::table('categorie')
                        ->select('idCategorie')
                        ->where('Nom_CategorieEN', '=', $DatabaseCat[$unit])
                        ->first()
                        ->idCategorie;


                    $CoeffGES = DB::table('categorie')
                        ->select('Coefficient_GES')
                        ->where('idCategorie','=', $Key)
                        ->first()
                        ->Coefficient_GES;


                    $Quantite_an = $categorie->cat = request($cat);


                $r = array(
                    'Categorie_idCategorie' => $Key,
                    'idProcede' => $cat . $InttoString,
                    'Nom_procede' => $cat,
                    'Quantite_an' => $Quantite_an,
                    'Unite_an' => $categorie->unit = request($unit),
                    'Emission_GES' => $CoeffGES * $Quantite_an,
                    'UID' => $categorie->UID = request('UID'),
                );

                array_push($data, $r);
            }


            DB::table('procede')->insert($data);

            return $data;

        } else { //if fields exist, update fields instead of replacing them all

            /**
             * iterates over all categories, if any are null, they are given a value if one was entered
             * if the value isn't null, the loop continues
             */





            foreach ($category as $unit => $cat) { //loop continues since element is not null

                echo $unit;
                echo "\n";

                echo $DatabaseCat[$unit];
                echo "\n";


                $Key = DB::table('categorie')
                    ->select('idCategorie')
                    ->where('Nom_CategorieEN', '=', $DatabaseCat[$unit])
                    ->first()
                    ->idCategorie;



                if (request($cat) != '') { //avoids wiping previous values
                    DB::table('procede')//updates fields based on UID and category name
                    ->where('UID', $id)
                        ->where('Nom_procede', $cat)
                        ->update([
                            'Categorie_idCategorie' => $Key,
                            'Quantite_an' => $categorie->$cat = request($cat),
                            'Unite_an' => $categorie->$unit = request($unit)
                        ]);
                }
                else {
                    continue;
                }


            }

        }


    }
}



