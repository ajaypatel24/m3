<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Procede extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('procede', function (Blueprint $table) {
            $table->increments("idProcede");
            $table->string('UID',30);

            $table->integer('Num_affiche');
            $table->string('Nom_procede',45);
            $table->integer('Quantite_an');
            $table->string('Unite_an', 10);
            $table->float('Emission_GES');
            $table->boolean('TransportEmp');
            $table->string('Indentifie_BD',10);
            $table->string('Nom_BD', 60);

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
        Schema::dropIfExists('procede');
    }
}
