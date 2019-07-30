<?php

namespace App\Http\Controllers;

use App\categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


/**
 * Class BilanController
 * @package App\Http\Controllers
 *
 * All methods are referencing calculations in the word document provided
 * every function is one of the calculations for easy debugging
 * All functions are executed at the bottom in a general function which
 * generates an array holding all the calculated values
 */

class BilanController extends Controller
{

        function sumX11($id) {
            $data = array();
            $values = array();
            $q = DB::table('categorie')
                ->select('idCategorie')
                ->where('Sub_CategorieFR', '=', 'Combustibles fossiles, sources fixes')
                ->get();


            foreach ($q as $key => $value) {
                array_push($data, $value->idCategorie);
            }


            foreach ($data as $v) {
                $r = DB::table('procede')
                    ->select('Emission_GES')
                    ->where('UID', '=', $id)
                    ->where('Categorie_idCategorie', '=', $v)
                    ->first();

                if ($r != null) {
                    array_push($values, $r->Emission_GES);
                }
                }



            return array_sum($values);


        }

        function sumX13($id) {
            $data = array();
            $values = array();
            $q = DB::table('categorie')
                ->select('idCategorie')
                ->where('Sub_CategorieFR', '=', 'Procédés agricoles')
                ->get();

            foreach ($q as $key => $value) {
                array_push($data, $value->idCategorie);
            }


            foreach ($data as $v) {
                $r = DB::table('procede')
                    ->select('Emission_GES')
                    ->where('UID', '=', $id)
                    ->where('Categorie_idCategorie', '=', $v)
                    ->first();

                if ($r != null) {
                    array_push($values, $r->Emission_GES);
                }
            }


            return array_sum($values);
        }


    function sumX21($id) {
    $data = array();
    $values = array();
    $q = DB::table('categorie')
        ->select('idCategorie')
        ->where('Sub_CategorieFR', '=', 'Électricité achetée')
        ->get();

    foreach ($q as $key => $value) {
        array_push($data, $value->idCategorie);
    }


    foreach ($data as $v) {
        $r = DB::table('procede')
            ->select('Emission_GES')
            ->where('UID', '=', $id)
            ->where('Categorie_idCategorie', '=', $v)
            ->first();

        if ($r != null) {
            array_push($values, $r->Emission_GES);
        }
    }


    return array_sum($values);
}

    function sumX22($id) {
        $data = array();
        $values = array();
        $q = DB::table('categorie')
            ->select('idCategorie')
            ->where('Sub_CategorieFR', '=', 'Achats de vapeur et de froid - à compéleter')
            ->get();

        foreach ($q as $key => $value) {
            array_push($data, $value->idCategorie);
        }


        foreach ($data as $v) {
            $r = DB::table('procede')
                ->select('Emission_GES')
                ->where('UID', '=', $id)
                ->where('Categorie_idCategorie', '=', $v)
                ->first();

            if ($r != null) {
                array_push($values, $r->Emission_GES);
            }
        }


        return array_sum($values);
    }

    function sumX31($id) {

        $t = DB::table('intrants')
            ->select('GES_annuel')
            ->where('immobilisation', '=', 0)
            ->where('UID','=',$id)
            ->sum('GES_annuel');

        return (float) $t;
    }

    function sumX32($id) {

        $t = DB::table('intrants')
            ->select('GES_annuel')
            ->where('immobilisation', '=', 1)
            ->where('UID','=',$id)
            ->sum('GES_annuel');

        return (float) $t;
    }


    function bilanRow(){
        $PosteEmission = [[
            "X11" => "Émissions directes des sources fixes de combustion",
            "X12" => "Émissions directes des sources mobiles de combustion",
            "X13" => "Émissions directes des procédés",
            "GazoleUnite" => "Émissions directes fugitives",
            "X21" =>"Émissions indirectes liées à la consommation d'électricité",
            "X22" => "Émissions indirectes liées à la consommation de vapeur, chaleur ou froid",
            "X31" => "Produits et services achetés",
            "X32" => "Biens immobilisés",
            "BiodieselUnite" =>"Émissions liées aux combustibles et à l'énergie (non inclus dans le scope 1 ou le scope 2)",
            "X34" => "Transport de marchandise amont et distribution",
            "X35" => "Déchets générés",
            "X36" => "Déplacements professionnels",
            "X37" => "Déplacements domicile travail",
            "VinUnite" =>"Actifs en leasing amont",
            "BiereUnite" => "Autres émissions indirectes amont",
            "X39" => "Transport de marchandise aval et distribution",
            "AutreMethaneUnite" =>"Transformation des produits vendus",
            "X310" => "Utilisation des produits vendus",
            "X312" => "Fin de vie des produits vendus",
            "MethaneAnimauxUnite" => "Actifs en leasing aval",
            "CokeUnite" => "Franchises",
            "CokeUnite" => "Investissements",
            "CokeUnite" => "Autres émissions indirectes aval",

        ]];
            return $PosteEmission;




    }
    function sumProcede($id) {
        $PosteEmission = [
            "X11" => "Émissions directes des sources fixes de combustion",
            "X12" => "Émissions directes des sources mobiles de combustion",
            "X13" => "Émissions directes des procédés",
            "GazoleUnite" => "Émissions directes fugitives",
            "X21" =>"Émissions indirectes liées à la consommation d'électricité",
            "X22" => "Émissions indirectes liées à la consommation de vapeur, chaleur ou froid",
            "X31" => "Produits et services achetés",
            "X32" => "Biens immobilisés",
            "BiodieselUnite" =>"Émissions liées aux combustibles et à l'énergie (non inclus dans le scope 1 ou le scope 2)",
            "X34" => "Transport de marchandise amont et distribution",
            "X35" => "Déchets générés",
            "X36" => "Déplacements professionnels",
            "X37" => "Déplacements domicile travail",
            "VinUnite" =>"Actifs en leasing amont",
            "BiereUnite" => "Autres émissions indirectes amont",
            "X39" => "Transport de marchandise aval et distribution",
            "AutreMethaneUnite" =>"Transformation des produits vendus",
            "X310" => "Utilisation des produits vendus",
            "X312" => "Fin de vie des produits vendus",
            "MethaneAnimauxUnite" => "Actifs en leasing aval",
            "CokeUnite" => "Franchises",
            "CokeUnite" => "Investissements",
            "CokeUnite" => "Autres émissions indirectes aval",

        ];

        $data = array();

            $X11 = $this->sumX11($id);
            $X13 = $this->sumX13($id);
            $X21 = $this->sumX21($id);
            $X22 = $this->sumX22($id);
            $X31 = $this->sumX31($id);
            $X32 = $this->sumX32($id);



            array_push($data, $X11, $X13, $X21, $X22, $X31, $X32);
            echo $PosteEmission["X11"];
            echo $PosteEmission["X12"];
            echo $PosteEmission["X13"];
            echo $PosteEmission["X21"];
            echo $PosteEmission["X22"];
            echo $PosteEmission["X31"];
            echo $PosteEmission["X32"];
            return $data;


        }
}
