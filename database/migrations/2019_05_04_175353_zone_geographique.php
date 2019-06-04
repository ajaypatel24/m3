<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ZoneGeographique extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('zonegeographique', function (Blueprint $table) {

            $table->integer("idZoneGeographique");
           $table->string("Municipalite", 20);
           $table->string("MRC", 20);
           $table->string("Region_adm", 20);
           $table->string("ProvinceEtat", 20);
           $table->integer("Pays");

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
        Schema::dropIfExists("zonegeographique");
    }
}
