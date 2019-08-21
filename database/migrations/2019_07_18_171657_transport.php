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


            $table->string('idTransport', 50)->primary();
            $table->string('UID',60)->nullable();
            $table->string('Lib_origine',20)->nullable();
            $table->string('Lib_destination',20)->nullable();
            $table->integer('Nb_km')->nullable();
            $table->boolean('Co_transport')->nullable();
            $table->string('Frequence_cumul', 20)->nullable();
            $table->boolean('Transporteur_connu')->nullable();
            $table->string('Nom_Transporteur', 45)->nullable();
            $table->string('Id_Organisation', 10)->nullable();
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