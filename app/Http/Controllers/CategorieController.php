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


        $categorie = new categorie();


        $category = [
            "GazUnite" => "GazNaturel",
            "PropaneUnite" => "Propane",
            "EssenceUnite" => "EssencePompe",
            "GazoleUnite" => "GazolePompe",
            "FioulUnite" => "FioulDomestique",
            "MazoutUnite" => "MazoutLeger",
            "CharbonUnite" => "Charbon",
            "CammionageUnite", //echo "\n=> "Cammionage",
            "ElectriciteUnite" => "TotalElectricite",
            "FossileUnite" => "Fossil",
            "BiodieselUnite" => "Biodiesel",
            "BoisUnite" => "Bois",
            "SoudureUnite" => "Soudure",
            "UsinageUnite" => "CNC",
            "VapeurUnite" => "VapeurFroid",
            "VinUnite" => "Vin",
            "BiereUnite" => "Biere",
            "HaloUnite" => "Halocarbunes",
            "AutreMethaneUnite" => "AutreMethane",
            "n2osolUnite" => "N2OSol",
            "n2oanimauxUnite" => "N2OAnimaux",
            "MethaneAnimauxUnite" => "MethaneAnimaux",
            "CokeUnite" => "Coke",

        ];


        $id = $categorie->UID = request('UID');

        $user = DB::table('procede')->where('UID', $id)->value('UID');
        if ($user === null) {


            $data = array();

            foreach ($category as $unit => $cat) {

                    $r = array(
                        'idProcede' => $cat,
                        'Nom_procede' => $cat,
                        'Quantite_an' => $categorie->cat = request($cat),
                        'Unite_an' => $categorie->unit = request($unit),
                        'UID' => $categorie->UID = request('UID'),
                    );

                    array_push($data, $r);
                    echo $unit;
                    echo "\n";
                    echo $cat;
                echo "\n";
                }


            DB::table('procede')->insert($data);

            return $data;

        } else { //if fields exist, update fields instead of replacing them all

            /**
             * iterates over all categories, if any are null, they are given a value if one was entered
             * if the value isn't null, the loop continues
             */

            foreach ($category as $unit => $cat) { //loop continues since element is not null
                print_r($cat);
                echo "\n";

                /*
                if (!request($cat) && !request($unit)) {
                    continue;
                }
                */

                DB::table('procede')//updates fields based on UID and category name
                ->where('UID', $id)
                    ->where('Nom_procede', $cat)
                    ->update([
                        'Quantite_an' => $categorie->$cat = request($cat),
                        'Unite_an' => $categorie->$unit = request($unit)
                    ]);

            }

        }


    }
}



