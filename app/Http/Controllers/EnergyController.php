<?php

namespace App\Http\Controllers;

use App\intrants;
use App\Intrant;

use App\TableInventaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function MongoDB\BSON\toJSON;

class EnergyController extends Controller
{
    function updateEnergy($Qan, $FK, $id) {


        $Key = DB::table('categorie')
            ->select('idCategorie')
            ->where('idCategorie', '=', $FK)
            ->first()
            ->idCategorie;

        $CoeffGES = DB::table('categorie')
            ->select('Coefficient_GES')
            ->where('idCategorie','=', $Key)
            ->first()
            ->Coefficient_GES;


        echo $Key;
        echo '\n';
        echo $CoeffGES;

        echo $Qan * $CoeffGES;

        DB::table('procede')
                ->where('Categorie_idCategorie', '=', $FK)
                ->where('UID','=',$id)
                ->update(['Quantite_an' => $Qan,
                    'Emission_GES' => $Qan * $CoeffGES]);

        }

    }

