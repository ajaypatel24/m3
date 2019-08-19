<?php

namespace App\Http\Controllers;

use App\categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProcedeController extends Controller
{
    function tableProcedeSave(request $request) {




            $Random = mt_rand(1,100);
            $InttoString = intval($Random);

            $categorie = new categorie();


            $category = [






                "CammionageUnite" => "Freight transportation by tonnes per kilometer",
                "SoudureUnite" => "Welding",
                "UsinageUnite" => "CNC Machining Turning",
                "VinUnite" => "Fermenting Wine",
                "BiereUnite" => "Gasification of Beer",
                "HaloUnite" => "Halocarbons/Other",
                "AutreMethaneUnite" => "Other Methane",
                "N2OSolUnite" => "N2O Fertilizer ",
                "N2OAnimauxUnite" => "N2O Animals",
                "MethaneAnimauxUnite" => "Animal Methane",


            ];

            $categoryState = [
                "CammionageUnite" => "Cammionage",
                "SoudureUnite" => "Soudure",
                "UsinageUnite" => "Usinage",
                "VinUnite" => "Vin",
                "BiereUnite" => "Biere",
                "HaloUnite" => "Halocarbures",
                "AutreMethaneUnite" => "AutreMethane",
                "N2OSolUnite" => "N2OSol",
                "N2OAnimauxUnite" => "N2OAnimaux",
                "MethaneAnimauxUnite" => "MethaneAnimaux",
                ];




            $id = $categorie->UID = request('UID');

        $user = DB::table('procede')
            ->where('UID', $id)
            ->where('Type_Procede','=','Procede')
            ->value('UID');
            if ($user === null) {


                $data = array();

                foreach ($category as $unit => $cat) {

                    $Key = DB::table('categorie')
                        ->select('idCategorie')
                        ->where('Nom_CategorieEN', '=', $category[$unit])
                        ->first()
                        ->idCategorie;

                    echo $Key;



                    $CoeffGES = DB::table('categorie')
                        ->select('Coefficient_GES')
                        ->where('idCategorie','=', $Key)
                        ->first()
                        ->Coefficient_GES;

                    $Quantite_an = $categorie->cat = request($categoryState[$unit]);
                    $EmissionGES = 0;
                    if ($CoeffGES == -1) {
                        $EmissionGES = -1;
                    }
                    else {
                        $EmissionGES = $CoeffGES * $Quantite_an ;
                    }



                    $r = array(
                        'Categorie_idCategorie' => $Key,
                        'idProcede' => $categoryState[$unit]. $InttoString,
                        'Nom_procede' => $categoryState[$unit],
                        'Quantite_an' => $categorie->cat = request($categoryState[$unit]),
                        'Unite_an' => $categorie->unit = request($unit),
                        'Emission_GES' => $EmissionGES ,
                        'UID' => $categorie->UID = request('UID'),
                        'Type_Procede' => 'Procede',
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

                    $Key = DB::table('categorie')
                        ->select('idCategorie')
                        ->where('Nom_CategorieEN', '=', $category[$unit])
                        ->first()
                        ->idCategorie;

                    $CoeffGES = DB::table('categorie')
                        ->select('Coefficient_GES')
                        ->where('idCategorie','=', $Key)
                        ->first()
                        ->Coefficient_GES;

                    echo "\n";
                    echo $CoeffGES;
                    echo "\n";

                    if ($CoeffGES == -1) {
                        $EmissionGES = -1;
                    }
                    else {
                        $EmissionGES = $CoeffGES * request($categoryState[$unit]) ;
                    }

                    if (request($categoryState[$unit]) != '') {
                        DB::table('procede')//updates fields based on UID and category name
                        ->where('UID', $id)
                            ->where('Nom_procede', $categoryState[$unit])
                            ->update([
                                'Quantite_an' => $categorie->$cat = request($categoryState[$unit]),
                                'Unite_an' => $categorie->$unit = request($unit),
                                'Emission_GES' => $EmissionGES,
                            ]);
                    }
                    else {
                        continue;
                    }

                }

            }


        }




}
