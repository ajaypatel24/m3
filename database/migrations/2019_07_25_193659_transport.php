<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Transport extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transport', function (Blueprint $table) {


            $table->string('UID',60);
            $table->string('Lib_origine',20);
            $table->string('Lib_destination',20);
            $table->integer('Nb_km');
            $table->boolean('Co_transport');
            $table->string('Frequence_cumul', 20);
            $table->boolean('Transporteur_connu');
            $table->string('Nom_Transporteur', 45);
            $table->string('Id_Organisation', 10);
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
        Schema::dropIfExists('transport');
    }
}