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

            $table->integer("idScian");
            $table->decimal("Code_2", 2);
            $table->decimal("Code_6", 6);
            $table->string("Secteur_EN", 45);
            $table->string("Secteur_FR", 45);
            $table->string("SousSecteur_EN", 45);
            $table->string("SousSecteur_FR", 45);
            $table->string("Langue", 2);

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
