<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Intrant extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('intrants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('num_affiche')->nullable();
            $table->string('nom_intrant',45);
            $table->integer('quantite_an')->nullable();
            $table->string('unite')->nullable();
            $table->string("frequence")->nullable();
            $table->boolean('ressource')->nullable();
            $table->boolean('immobilisation')->default(false);
            $table->boolean('nouvel_intrant')->default(true);
            $table->integer('duree_vie_immo')->nullable();
            $table->integer('NbTransport')->nullable();
            $table->string('provenance', 30)->nullable();
            $table->integer('GES_annuel')->nullable();
            $table->string('Identifie_BD', 10)->nullable();
            $table->string('UID',60)->index();
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
        Schema::dropIfExists('intrants');
    }
}
