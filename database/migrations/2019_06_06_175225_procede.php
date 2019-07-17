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
            $table->string("TableIntrant_idCategorie");

            $table->
            foreign("TableIntrant_idCategorie")->
            references("idCategorie")->
            on("categorie");

            $table->string("Inventaire_idInventaire");

            $table->
            foreign("Inventaire_idInventaire")->
            references("idInventaire")->
            on("inventaire");



            $table->increments("idProcede");


            $table->integer('Num_affiche')->default(12)->nullable();
            $table->string('Nom_procede',45)->nullable();
            $table->integer('Quantite_an')->default(-1)->nullable();
            $table->string('Unite_an', 10)->default('N/A')->nullable();
            $table->float('Emission_GES')->nullable();
            $table->boolean('TransportEmp')->nullable();
            $table->string('Indentifie_BD',10)->nullable();
            $table->string('Nom_BD', 60)->nullable();

            $table->string('UID',60);
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('created_at')->nullable();
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
