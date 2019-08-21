<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Inventaire extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventaire', function (Blueprint $table) {

            $table->string("Organisation_idOrganisation");
            $table->
            foreign("Organisation_idOrganisation")->
            references("idOrganisation")->
            on("organisation");






            $table->string("idInventaire")->primary();
            $table->string("Annee_Inventaire")->nullable();
            $table->string("Activite", 40)->nullable();
            $table->string("Commentaire", 255)->nullable();
            $table->integer("Complete")->nullable();
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
        Schema::dropIfExists('inventaire');
    }
}
