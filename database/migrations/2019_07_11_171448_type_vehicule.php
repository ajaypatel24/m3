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

            $table->string('idVehicule')->primary();
            $table->integer('Num_Affiche');
            $table->string('Lib_VehiculeEN',60)->nullable();
            $table->string('Lib_VehiculeFR',60)->nullable();
            $table->string('Type_transport',10)->nullable();
            $table->decimal('Coeff_GES_km', 9,8)->default(0);
            $table->integer('PoidsChargement')->default(0);
            $table->decimal('VolumeChargement',6,2)->default(0);
            $table->string('Identifie_BD', 30)->nullable();
            $table->string('Nom_BD', 80)->nullable();
            $table->string('Categorie1', 200)->nullable();
            $table->decimal('Score_CC', 7,5)->default(0);
            $table->decimal('Score_SH', 14,12)->default(0);
            $table->decimal('Score_EcoS', 15,14)->default(0);
            $table->decimal('Score_Res', 9,8)->default(0);
            $table->string('Informations_Add', 255)->nullable();
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



