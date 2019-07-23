<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Deplacement extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deplacement', function (Blueprint $table) {


            $table->string("TypeVehicule_idVehicule", 10);
            $table->
            foreign("TypeVehicule_idVehicule")->
            references("idVehicule")->
            on("typevehicule");

            /*
            $table->string("Inventaire_idInventaire", 10);
            $table->
            foreign("Inventaire_idInventaire")->
            references("idInventaire")->
            on("inventaire");
            */

            $table->string("Categorie_idCategorie", 10);
            $table->
            foreign("Categorie_idCategorie")->
            references("idCategorie")->
            on("categorie");




            $table->string('idDeplacement', 20)->primary();
            $table->string('Libelle_Deplacement',30)->nullable();
            $table->string('Origine', 60);
            $table->string('Destination', 60);
            $table->integer('Nb_km_AR');
            $table->integer('Nb_voyageurs')->default(1);
            $table->integer('Nb_voyageurs_An')->default(1);
            $table->string('Type_Deplacement', 150);
            $table->decimal('Emission_GES',10,7);
            $table->boolean('Vehicule_Compagnie')->nullable();
            $table->integer('Covoiturage')->default(1);

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deplacement');
    }
}