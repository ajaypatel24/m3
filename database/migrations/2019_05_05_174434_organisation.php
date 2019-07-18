<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Organisation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("organisation", function(Blueprint $table) {



            $table->integer("ZoneGeographique_idZoneGeographique");

            $table->
            foreign("ZoneGeographique_idZoneGeographique")->
            references("idZoneGeographique")->
            on("zone_geographique");



            $table->integer("Scian_idScian");

            $table->
            foreign("Scian_idScian")->
            references("idScian")->
            on("scian");







            $table->string("idOrganisation")->primary();
            $table->string("Nom_Organisation", 20);
            $table->string("Type_organisation", 20);
            $table->integer("Suivi");
            $table->string("Constitution", 20);
            $table->string("Clientele", 20);
            $table->string("Description_offre", 150);
            $table->string("Marche", 20);
            $table->string("Site_web", 30);
            $table->string("Addresse_rue", 30);
            $table->string("Code_postal", 7);
            $table->string("Addresse_rue_ss", 30)->nullable();
            $table->string("Code_postal_ss", 7)->nullable();
            $table->string("Langue",2); //why?

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
        Schema::dropIfExists("organisation");
    }
}
