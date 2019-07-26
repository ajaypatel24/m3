
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



            $table->string("Ressource_idressource")->nullable();
            $table->
            foreign("Ressource_idressource")->
            references("idRessource")->
            on("ressource");

            $table->string("Inventaire_idInventaire")->nullable();
            $table->
            foreign("Inventaire_idInventaire")->
            references("idInventaire")->
            on("inventaire");




            $table->string('idIntrant', 10)->primary();
            $table->integer('num_affiche')->nullable();
            $table->string('nom_intrant',45);
            $table->integer('quantite_an')->nullable();
            $table->integer('besoin-offre')->nullable();
            $table->integer('GES_annuel')->nullable();
            $table->boolean('ressource')->nullable();
            $table->string('unite',10)->nullable();
            $table->boolean('immobilisation')->default(false);
            $table->integer('duree_vie_immo')->nullable();
            $table->integer('NbTransport')->nullable();
            $table->string('provenance', 30)->nullable();
            $table->boolean('nouvel_intrant')->default(true);
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
        Schema::dropIfExists('intrants');
    }
}
