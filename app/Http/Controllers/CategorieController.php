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


        /*
        $categorie->GazNaturel = request('GazNaturel');
        $categorie->GazUnite = request('GazUnite');

        $categorie->Propane = request('Propane');
        $categorie->PropaneUnite = request('PropaneUnite');

        $categorie->EssencePompe = request('EssencePompe');
        $categorie->EssenceUnite = request('EssenceUnite');

        $categorie->GazolePomp = request('GazolePomp');
        $categorie->GazoleUnite = request('GazoleUnite');

        $categorie->FioulDomestique = request('FioulDomestique');
        $categorie->FioulUnite = request('FioulUnite');

        $categorie->MazoutLeger = request('MazoutLeger');
        $categorie->MazoutUnite = request('MazoutUnite');

        $categorie->Charbon = request('Charbon');
        $categorie->CharbonUnite = request('CharbonUnite');

        $categorie->Cammionage = request('Cammionage');
        $categorie->CammionageUnite = request('CammionageUnite');

        $categorie->TotalElectricite = request('TotalElectricite');
        $categorie->ElectriciteUnite = request('ElectriciteUnite');

        $categorie->Fossil = request('Fossil');
        $categorie->FossileUnite = request('FossileUnite');

        $categorie->Biodiesel = request('Biodiesel');
        $categorie->BiodieselUnite = request('BiodieselUnite');

        $categorie->Bois = request('Bois');
        $categorie->BoisUnite = request('BoisUnite');

        $categorie->soudure = request('soudure');
        $categorie->SoudureUnite = request('SoudureUnite');

        $categorie->CNC = request('CNC');
        $categorie->UsinageUnite = request('UsinageUnite');

        $categorie->VapeurFroid = request('VapeurFroid');
        $categorie->VapeurUnite = request('VapeurUnite');

        $categorie->Vin = request('Vin');
        $categorie->VinUnite = request('VinUnite');

        $categorie->Biere = request('Biere');
        $categorie->BiereUnite = request('BiereUnite');

        $categorie->Halocarbunes = request('Halocarbunes');
        $categorie->HaloUnite = request('HaloUnite');

        $categorie->AutreMethane = request('AutreMethane');
        $categorie->AutreMethaneUnite = request('AutreMethaneUnite');

        $categorie->n2osol = request('n2osol');
        $categorie->n2osolUnite = request('n2osolUnite');

        $categorie->n2oanimaux = request('n2oanimaux');
        $categorie->n2oanimauxUnite = request('n2oanimauxUnite');

        $categorie->MethaneAnimaux = request('MethaneAnimaux');
        $categorie->MethaneAnimauxUnite = request('MethaneAnimauxUnite');

        $categorie->Coke = request('Coke');
        $categorie->CokeUnite = request('CokeUnite');
        */


        /**
         * this query inserts multiple rows into
         * the table, find a way to pass variables
         *
         * Unite_an
         */

        $data = array(
            array(
                'Nom_procede' => 'Gaz Naturel',
                'Quantite_an' => $categorie->GazNaturel = request('GazNaturel'),
                'Unite_an' => $categorie->GazUnite = request('GazUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),

            array(
                'Nom_procede' => 'Propane',
                'Quantite_an' => $categorie->Propane = request('Propane'),
                'Unite_an' => $categorie->PropaneUnite = request('PropaneUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Essence Pompe',
                'Quantite_an' => $categorie->EssencePompe = request('EssencePompe'),
                'Unite_an' => $categorie->EssenceUnite = request('EssenceUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Gazole Pompe',
                'Quantite_an' => $categorie->GazolePomp = request('GazolePomp'),
                'Unite_an' => $categorie->GazoleUnite = request('GazoleUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Fioul Domestique',
                'Quantite_an' => $categorie->FioulDomestique = request('FioulDomestique'),
                'Unite_an' => $categorie->FioulUnite = request('FioulUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Mazout',
                'Quantite_an' => $categorie->MazoutLeger = request('MazoutLeger'),
                'Unite_an' => $categorie->MazoutUnite = request('MazoutUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Charbon',
                'Quantite_an' => $categorie->Charbon = request('Charbon'),
                'Unite_an' => $categorie->CharbonUnite = request('CharbonUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Cammionage',
                'Quantite_an' => $categorie->Cammionage = request('Cammionage'),
                'Unite_an' => $categorie->CammionageUnite = request('CammionageUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Electricite',
                'Quantite_an' => $categorie->TotalElectricite = request('TotalElectricite'),
                'Unite_an' => $categorie->ElectriciteUnite = request('ElectriciteUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Fossile',
                'Quantite_an' => $categorie->Fossil = request('Fossil'),
                'Unite_an' => $categorie->FossileUnite = request('FossileUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Biodiesel',
                'Quantite_an' => $categorie->Biodiesel = request('Biodiesel'),
                'Unite_an' => $categorie->BiodieselUnite = request('BiodieselUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Bois',
                'Quantite_an' => $categorie->Bois = request('Bois'),
                'Unite_an' => $categorie->BoisUnite = request('BoisUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Soudure',
                'Quantite_an' => $categorie->soudure = request('soudure'),
                'Unite_an' => $categorie->SoudureUnite = request('SoudureUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'CNC',
                'Quantite_an' => $categorie->CNC = request('CNC'),
                'Unite_an' => $categorie->UsinageUnite = request('UsinageUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Vapeur Froid',
                'Quantite_an' => $categorie->VapeurFroid = request('VapeurFroid'),
                'Unite_an' => $categorie->VapeurUnite = request('VapeurUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Vin',
                'Quantite_an' => $categorie->Vin = request('Vin'),
                'Unite_an' => $categorie->Vin = request('VinUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Biere',
                'Quantite_an' => $categorie->Biere = request('Biere'),
                'Unite_an' => $categorie->BiereUnite = request('BiereUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Halocarbunes',
                'Quantite_an' => $categorie->Halocarbunes = request('Halocarbunes'),
                'Unite_an' => $categorie->HaloUnite = request('HaloUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Autre Methane',
                'Quantite_an' => $categorie->AutreMethane = request('AutreMethane'),
                'Unite_an' => $categorie->AutreMethaneUnite = request('AutreMethaneUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'N2O Sol',
                'Quantite_an' => $categorie->n2osol = request('n2osol'),
                'Unite_an' => $categorie->n2osolUnite = request('n2osolUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'N2O Animaux',
                'Quantite_an' => $categorie->n2oanimaux = request('n2oanimaux'),
                'Unite_an' => $categorie->n2oanimauxUnite = request('n2oanimauxUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Methane Animaux',
                'Quantite_an' => $categorie->MethaneAnimaux = request('MethaneAnimaux'),
                'Unite_an' => $categorie->MethaneAnimauxUnite = request('MethaneAnimauxUnite'),
                'UID' => $categorie->UID = request('UID'),
            ),
            array(
                'Nom_procede' => 'Coke',
                'Quantite_an' => $categorie->Coke = request('Coke'),
                'Unite_an' => $categorie->CokeUnite = request('CokeUnite'),
                'UID' => $categorie->UID = request('UID'),
            )
        );


        DB::table('procede')->insert($data);


    }

    function p()
    { //test method to see if data is retrieved from database
        $categorie = DB::table('procede')->get();
        return $categorie;

    }
}

