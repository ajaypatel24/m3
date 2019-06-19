<?php

namespace App\Http\Controllers;

use App\intrants;

use App\TableInventaire;
use Illuminate\Http\Request;


class InventaireController extends Controller
{

    function index()
    {
        return view('welcome');
    }

    function store(request $request)
    {

        $TableInventaire = new TableInventaire();



    }

    function p() { //test method to see if data is retrieved from database
        $intrants = intrants::all()->toArray();

        return $intrants;


    }

}

