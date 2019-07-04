<?php

namespace App\Http\Controllers;

use App\Register;
use Illuminate\Support\Facades\DB;
use JavaScript;

class RegisterController extends Controller
{
    function register()
    {
        $register = new Register();


        $register->uid = request('uid');
        $register->name = request('name');
        $register->organization = request('organization');
        $register->email = request('email');
        $register->save();

        /*
        JavaScript::put([
            'name' => $register->name
        ]);
        */
    }



    function contactInfo($id) {

        $register = new Register();

        $fonction = $register->Fonction = request('Fonction');
        $telephone = $register->Telephone = request('Telephone');
        $telephone2 = $register->Telephone2 = request('Telephone2');
        $Poste_telephone = $register->PosteTelephone = request('PosteTelephone');
        $langue = $register->Langue = request('Langue');

        DB::table('register')
            ->where('uid', $id)
            ->update([
                'fonction' => $fonction,
                'telephone' => $telephone,
                'telephone2' => $telephone2,
                'Poste_telephone' => $Poste_telephone,
                'langue' => $langue
            ]);


    }


    function profileInfo($id) {
        $information = DB::table('register')->where('uid', $id)->get();

        return $information;
    }
}
