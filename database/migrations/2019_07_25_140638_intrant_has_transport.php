<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class IntrantHasTransport extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('intrant_has_transport', function (Blueprint $table) {


            $table->string("Intrant_idIntrant", 10);
            $table->
            foreign("Intrant_idIntrant")->
            references("idIntrant")->
            on("intrants");




            $table->string("Transport_idTransport", 50)->nullable();
            $table->
            foreign("Transport_idTransport")->
            references("idTransport")->
            on("transport");




            $table->string("Type_Vehicule_idVehicule", 10)->nullable();
            $table->
            foreign("Type_Vehicule_idVehicule")->
            references("idVehicule")->
            on("typevehicule");





            $table->decimal('Quantite', 10,5)->nullable();
            $table->integer('Frequence')->nullable();
            $table->string('Unite',10)->nullable();
            $table->decimal('Score_CC', 10,5)->nullable();
            $table->decimal('Score_SH', 20,19)->nullable();
            $table->decimal('Score_EcoS',20,19)->nullable();
            $table->decimal('Score_Res' ,10,5)->nullable();
            $table->integer('Qualite_Data')->nullable();
            $table->string('Commentaire', 225)->nullable();

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
        Schema::dropIfExists('intrant_has_transport');
    }
}