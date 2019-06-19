<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TypeVehicule extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('typevehicule', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Lib_VehiculeEN',30);
            $table->string('Lib_VehiculeFR',30);
            $table->string('Type_transport',10);
            $table->integer('GES_km');
            $table->string('Identifie_BD', 10);
            $table->string('Nom_BD', 60);
            $table->string('Categorie1', 20);
            $table->string('SCategorie_2', 20);
            $table->string('SCategorie_3', 20);
            $table->string('Commentaire', 255);
            $table->integer('Qualite_Data');
            $table->float('Score_CC');
            $table->float('Score_SH');
            $table->float('Score_EcoS');
            $table->float('Score_Res');
            $table->string('Informations_Add', 255);
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
        Schema::dropIfExists('typevehicule');
    }
}
