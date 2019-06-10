<?php

namespace App\Http\Controllers;

use App\categorie;

use Illuminate\Http\Request;


class CategorieController extends Controller
{

    function index()
    {
        return view('welcome');
    }

    function store(request $request)
    {

        $categorie = new categorie();


        $categorie->Unite = request('Unite');
        $categorie->Nom_Categorie = request('GazNaturel');
        $categorie->Num_Affich = (1);


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


        $categorie->save();


    }

    function p() { //test method to see if data is retrieved from database
        $categorie = intrants::all()->toArray();

        return $categorie;


    }
}

