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


            /*

            $table->string("Transport_idTransport", 10);
            $table->
            foreign("Transport_idTransport")->
            references("idCategorie")->
            on("transport");
            */



            $table->string("Type_Vehicule_idVehicule", 10);
            $table->
            foreign("Type_Vehicule_idVehicule")->
            references("idVehicule")->
            on("typevehicule");





            $table->decimal('Quantite', 10,5);
            $table->integer('Frequence');
            $table->string('Unite',10);
            $table->decimal('Score_CC', 10,5);
            $table->decimal('Score_SH', 20,19);
            $table->decimal('Score_EcoS',20,19);
            $table->decimal('Score_Res' ,10,5);
            $table->integer('Qualite_Data');
            $table->string('Commentaire', 225);

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