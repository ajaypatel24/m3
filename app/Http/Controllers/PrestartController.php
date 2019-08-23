<?php

namespace App\Http\Controllers;

use App\prestart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PrestartController extends Controller
{


    /**
     * @param Request $request
     *
     * takes in request and breaks it down into all parameters
     * which are stored in the database under the prestart table
     */
    function prestartSave(request $request)
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

    /**
     * @return array
     *
     * test method
     */
    function p() { //test method to see if data is retrieved from database
        $prestart = Prestart::all()->toArray();

        return $prestart;


    }

    /**
     * another test method to get all users from database
     */
    public function index() {
        $users = DB::table('prestart')->get();


    }

    /**
     * @param $id
     *
     * searches for user based on their unique ID
     */
    public function search($id) {
        $users = DB::table('register')->where('uid', $id)->value('email', 'name');


    }

    /**
     * @param $id
     *
     * returns SCIAN code of specific user based on their ID
     */
    public function searchSCIAN($id) {
        $users = DB::table('prestart')->where('uid', $id)->value('SectorActivity');


    }

    /**
     * @param $id
     * @return mixed
     *
     * returns users name based on their UID
     */
    public function getName($id) {
        $name = DB::table('register')->where('uid', $id)->value('name');

        return $name;
    }
    public function getInitial($id) {
        $name = DB::table('register')->where('uid', $id)->value('name');

        return $name[0];
    }



    /**
     * @return \Illuminate\Support\Collection
     *
     * experimental query, joins 2 tables together and saves only parameters specified
     * of both into new accessible table
     */
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


        return $data;

    }
}

