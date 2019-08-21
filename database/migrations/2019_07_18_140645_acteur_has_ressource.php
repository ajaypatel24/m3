<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ActeurHasRessource extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acteur_has_ressource', function (Blueprint $table) {
            $table->string("Acteur_idActeur", 10);
            $table->
            foreign("Acteur_idActeur")->
            references("idActeur")->
            on("acteur");

            $table->string("Ressource_idRessource", 10);
            $table->
            foreign("Ressource_idRessource")->
            references("idRessource")->
            on("ressource");



            $table->integer('OffreBesoin')->primary();







        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('acteur_has_ressource');
    }
}
