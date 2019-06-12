<?php

namespace App\Http\Controllers;

use App\intrants;

use Illuminate\Http\Request;


class InventaireController extends Controller
{

    function index()
    {
        return view('welcome');
    }

    function store(request $request)
    {

        $intrants = new intrants();

        $intrants->Annee_Inventaire = request('rows');
        /*
        $intrants->QuebecAddress = request('QuebecAddress');
        $intrants->City = request('City');
        $intrants->PostalCode = request('PostalCode');
        $intrants->CorporateAddress = request('CorporateAddress');
        $intrants->IncomeValue = request('IncomeValue');
        $intrants->BusinessType = request('BusinessType');
        $intrants->SectorActivity = request('SectorActivity');
        $intrants->BusinessClass = request('BusinessClass');
        $intrants->ExistCommittee = request('ExistCommittee');
        $intrants->BusinessLevel = request('BusinessLevel');
        $intrants->BusinessClientBase = request('BusinessClientBase');
        $intrants->IncomeValue = request('IncomeValue');
        $intrants->EmployeeNumber = request('EmployeeNumber');
        $intrants->OfferToClient = request('OfferToClient');
        */


        $intrants->save();


    }

    function p() { //test method to see if data is retrieved from database
        $intrants = intrants::all()->toArray();

        return $intrants;


    }

}

