<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrestartController extends Controller
{

    function index()
    {
        return view('welcome');
    }

    function store () {

            $BusinessName = request('BusinessName');
            $QuebecAddress = request('QuebecAddress');
            $City = request('City');
            $PostalCode = request('PostalCode');
            $CorporateAddress = request('CorporateAddress');
            $IncomeValue = request('IncomeValue');
            $SCIAN = request('SCIAN');
            $EmployeeNumber = request('EmployeeNumber');
            $OfferToClient = request('OfferToClient');
            $Confirm = request('Confirm');

            echo('BusinessName :' . $BusinessName);
            echo('Confirm :' . $Confirm);
            echo('QuebecAddress: ' . $QuebecAddress);

            return null;
        }
    }

