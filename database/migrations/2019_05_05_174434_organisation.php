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

            /*

            $table->integer("Scian_idScian");

            $table->
            foreign("Scian_idScian")->
            references("idScian")->
            on("scian");
*/




            $table->increments("idOrganisation");
            $table->string("NomOrganisation", 20);
            $table->string("SiteWeb", 30);
            $table->string("Addresse", 30);
            $table->string("CodePostale", 7);
            $table->string("Addresse_ss", 30)->nullable();
            $table->string("CodePostale_ss", 7)->nullable();
            $table->string("TypeOrganisation", 20);
            $table->string("Constitution", 20);
            $table->string("Marche", 20);
            $table->string("Clientele", 20);
            $table->string("DescriptionOffre", 150);
            $table->string("Langue",2);

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
