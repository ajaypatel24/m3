<?php

namespace App\Http\Controllers;

use App\prestart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PrestartController extends Controller
{


    function store(request $request)
    {

        $prestart = new prestart();

        $prestart->BusinessName = request('BusinessName');
        $prestart->QuebecAddress = request('QuebecAddress');
        $prestart->City = request('City');
        $prestart->PostalCode = request('PostalCode');
        $prestart->CorporateAddress = request('CorporateAddress');
        $prestart->IncomeValue = request('IncomeValue');
        $prestart->BusinessType = request('BusinessType');
        $prestart->SectorActivity = request('SectorActivity');
        $prestart->BusinessClass = request('BusinessClass');
        $prestart->ExistCommittee = request('ExistCommittee');
        $prestart->BusinessLevel = request('BusinessLevel');
        $prestart->BusinessClientBase = request('BusinessClientBase');
        $prestart->IncomeValue = request('IncomeValue');
        $prestart->EmployeeNumber = request('EmployeeNumber');
        $prestart->OfferToClient = request('OfferToClient');
        $prestart->UID = request('UID');


        $prestart->save();


    }

    function p() { //test method to see if data is retrieved from database
        $prestart = Prestart::all()->toArray();

        return $prestart;


    }

    public function index() {
        $users = DB::table('prestart')->get();

        echo $users;
    }

    public function search($id) {
        $users = DB::table('register')->where('uid', $id)->value('email', 'name');

        echo $users;
    }

    public function searchSCIAN($id) {
        $users = DB::table('prestart')->where('uid', $id)->value('SectorActivity');

        echo $users;
    }

    public function getName($id) {
        $name = DB::table('register')->where('uid', $id)->value('name');

        return $name;
    }

    public function testQuery() {

        $data = DB::table('register')
            ->join('prestart', 'register.UID', '=', 'prestart.UID') //link tables using primary key
            ->select('register.email','prestart.SectorActivity', 'register.uid') //create a table with the linked values of the two
            ->get(); //return
            /*
            ->join('prestart', 'prestart.id', '=','register.id')
            ->select('register.id', 'register.email', 'register.name')
            ->get();
            */

        //echo "<pre>";
        //print_r($data);

        return $data;

    }
}

