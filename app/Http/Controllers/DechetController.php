<?php

namespace App\Http\Controllers;

use App\Dechet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DechetController extends Controller
{
    public function addDechet(request $request)
    {

        $Dechet = new Dechet();

        $Random = mt_rand(1, 100);
        $InttoString = intval($Random);
        $data = array();

        $DechetArray = [
            'RecycleWaste' => 'Recycling of mixed waste',
            'DomesticWaste' => 'Infill of domestic waste',
            'Incineration' => 'Incineration of domestic waste',
            'OrganicComposed' => 'Composed organic material',

        ];

        /*
           request('RecycleWaste')
           request('DomesticWaste')
           request('Incineration')
           request('OrganicComposed')
        */


        foreach ($DechetArray as $key => $value) {
            $CoeffGES = DB::table('categorie')
                ->select('Coefficient_GES')
                ->where('Partie_InventaireEN', '=', 'Direct waste')
                ->where('Nom_CategorieEN', '=', $DechetArray[$key])
                ->first()
                ->Coefficient_GES;

            $IdCategorie = DB::table('categorie')
                ->select('idCategorie')
                ->where('Partie_InventaireEN', '=', 'Direct waste')
                ->where('Nom_CategorieEN', '=', $DechetArray[$key])
                ->first()
                ->idCategorie;

                $Quantite_an = request($key);
                $Unite = request($key.'Unite');
                echo $Unite;
                $Emission_GES = $Quantite_an * $CoeffGES;
            $r = array(
                'Categorie_idCategorie' => $IdCategorie,
                'idProcede' => $key . $InttoString,
                'Nom_procede' => $key,
                'Quantite_an' => $Quantite_an,
                'Unite_an' => $Unite,
                'Emission_GES' => $Emission_GES,
                'UID' => $Dechet->UID = request('UID'),
            );

            array_push($data, $r);

        }

        DB::table('procede')->insert($data);

       print_r($data);

    }

    public function getDechet($uid)
    {
        return true;
    }

    public function editDechet($uid)
    {
        return true;
    }
}
