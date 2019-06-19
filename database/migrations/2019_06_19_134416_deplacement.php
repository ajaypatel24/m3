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
            $table->integer('Procede_idProcede');
            $table->string('Procede_UID', 10);
            $table->integer('Origine');
            $table->integer('Destination');
            $table->integer('Nb_participant');
            $table->integer('Nb_km');
            $table->string('Type_Deplacement', 10);
            $table->boolean('Vehicule_Compagnie');
            $table->integer('Freqiuence_Annuelle');
            $table->boolean('AR');
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
