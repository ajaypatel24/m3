<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Intrant extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('intrants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('num_affiche');
            $table->string('nom_intrant',45);
            $table->integer('quantite_an');
            $table->boolean('ressource');
            $table->boolean('immobilisation');
            $table->integer('duree_vie_immo');
            $table->integer('NbTransport');
            $table->integer('provenance');
            $table->integer('GES_annuel');
            $table->string('Identifie_BD', 10);
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
        Schema::dropIfExists('intrants');
    }
}
