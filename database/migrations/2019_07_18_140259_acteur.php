<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Acteur extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acteur', function (Blueprint $table) {
            $table->string('idActeur',10)->primary();
            $table->string('Type_Acteur', 10);
            $table->string('Service_rendu', 100);
            $table->string('Territoire_desservi', 20);
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
        Schema::dropIfExists('acteur');
    }
}
