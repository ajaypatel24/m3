<?php

namespace App\Http\Controllers;

use App\categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BilanController extends Controller
{
        function sumProcede() {
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
                    ->where('Categorie_idCategorie', '=', $v)
                    ->first();

                if ($r != null) {
                    array_push($values, $r->Emission_GES);
                }


                }


            return array_sum($values);


        }


}
