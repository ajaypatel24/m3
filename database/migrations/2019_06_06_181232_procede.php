<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class Procede extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('procede', function (Blueprint $table) {
            $table->string("Categorie_idCategorie", 10)->nullable();

            $table->
            foreign("Categorie_idCategorie")->
            references("idCategorie")->
            on("categorie");

            $table->string("Inventaire_idInventaire")->nullable();

            $table->
            foreign("Inventaire_idInventaire")->
            references("idInventaire")->
            on("inventaire");



            $table->string("idProcede", 20)->primary();


            $table->integer('Num_affiche')->default(-1)->nullable();
            $table->string('Nom_procede',45)->nullable();
            $table->integer('Quantite_an')->default(-1)->nullable();
            $table->string('Type_Procede',50);
            $table->string('Unite_an', 10)->default('N/A')->nullable();
            $table->integer('Scope')->default(-1)->nullable();
            $table->decimal('Emission_GES', 9,4)->nullable();
            $table->boolean('Nouveau_Procede')->nullable();
            $table->string('UID',60);

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
        Schema::dropIfExists('procede');
    }
}
