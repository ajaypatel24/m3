<?php

namespace App\Http\Controllers;

use App\categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

        function sumProcede($id) {
            $data = array();

            $X11 = $this->sumX11($id);
            $X13 = $this->sumX13($id);
            $X21 = $this->sumX21($id);
            $X22 = $this->sumX22($id);


            array_push($data, $X11, $X13, $X21, $X22);
            return $data;


        }
}
