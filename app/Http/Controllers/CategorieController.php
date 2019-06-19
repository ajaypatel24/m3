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

    function store(request $request)
    {

        $categorie = new categorie();


        /**
         * this query inserts multiple rows into
         * the table, find a way to pass variables
         */

        $data = array(
            array('Num_affiche'=>202, 'Nom_procede'=> "hiii"),
            array('Num_affiche'=>100, 'Nom_procede'=> "boooo"),
        );
        DB::table('procede')->insert($data);





        $rows = $request->getContent();
        $rows = str_replace("{", '', $rows);
        $rows = str_replace("}", '', $rows);
        $rows = str_replace('""', '', $rows);
        $rows = str_replace('"', '', $rows);
        $rows2 = explode(',',$rows);


        $g = 0;

        foreach ($rows2 as $t) {
            print_r($t);
            print_r("\n");
        }

        /*
        $categorie->Annee_Inventaire = request('rows');

        $categorie->unite = request('unite');
        $categorie->City = request('City');
        $categorie->PostalCode = request('PostalCode');
        $categorie->CorporateAddress = request('CorporateAddress');
        $categorie->IncomeValue = request('IncomeValue');
        $categorie->BusinessType = request('BusinessType');
        $categorie->SectorActivity = request('SectorActivity');
        $categorie->BusinessClass = request('BusinessClass');
        $categorie->ExistCommittee = request('ExistCommittee');
        $categorie->BusinessLevel = request('BusinessLevel');
        $categorie->BusinessClientBase = request('BusinessClientBase');
        $categorie->IncomeValue = request('IncomeValue');
        $categorie->EmployeeNumber = request('EmployeeNumber');
        $categorie->OfferToClient = request('OfferToClient');
        */





    }

    function p() { //test method to see if data is retrieved from database
        $categorie = intrants::all()->toArray();
        return $categorie;


    }
}

