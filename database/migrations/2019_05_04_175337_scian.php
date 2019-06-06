<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Scian extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("scian", function(Blueprint $table)
        {

            $table->increments("idScian");
            $table->integer("Code_2");
            $table->integer("Code_6");
            $table->string("Secteur_EN", 200);
            $table->string("Secteur_FR", 200);
            $table->string("SousSecteur_EN", 200);
            $table->string("SousSecteur_FR", 200);
            //$table->string("Langue", 200);

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
        Schema::dropIfExists("scian");
    }
}
