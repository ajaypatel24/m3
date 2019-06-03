<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
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
            $SectorActivity = request('SectorActivity');
            $ClientBase = request('ClientBase');

            echo ('BusinessName: ' + $BusinessName);
            echo ('QuebecAddress: ' + $QuebecAddress);
            echo ('BusinessName: ' + $City);
            echo ('BusinessName: ' + $PostalCode);
            echo ('BusinessName: ' + $CorporateAddress);
            echo ('BusinessName: ' + $IncomeValue);
            echo ('BusinessName: ' + $SCIAN);
            echo ('BusinessName: ' + $EmployeeNumber);
            echo ('BusinessName: ' + $OfferToClient);
            echo ('BusinessName: ' + $SectorActivity);
            echo ('BusinessName: ' + $ClientBase);



            return null;
        }
    }

