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
            $table->bigIncrements('idDeplacement');
            $table->string('Categorie_idCategorie', 10);
            $table->string('Type_Vehicule_idVehicule', 10);
            $table->string('Type_Deplacement', 10);
            $table->string('Libelle_Deplacement', 30);
            $table->string('Origine', 60);
            $table->string('Destination', 60);
            $table->integer('Nb_voyageurs');
            $table->integer('Nb_km_AR');
            $table->integer('Nb_voyages_An');
            $table->boolean('Vehicule_Compagnie');
            $table->boolean('Covoiturage');

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