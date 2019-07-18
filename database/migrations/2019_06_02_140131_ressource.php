<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Ressource extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ressource', function (Blueprint $table) {

            $table->string('idRessource')->primary(); //change

            $table->string('Num_affiche', 100);
            $table->string('Nom_RessourceEN', 100);
            $table->string('Nom_RessourceFR', 100);
            $table->string('Type_ressource',100);
            $table->string("Immobilisation", 100);
            $table->string("Duree_de_vie", 100);
            $table->string("Unite_duree_vie", 100);
            $table->string('Scian_Code2',100);
            $table->string('Scian_Code6',100);
            $table->string('Identifie_BD',100);
            $table->string('Categorie_1',100);
            $table->string('SCategorie_2',100);
            $table->string('SCategorie_3',100);
            $table->string('Nom_BD',200);
            $table->string('Unite_BD', 100);
            $table->decimal('Score_CC_uni', 10,5);
            $table->decimal('Score_SH_uni', 20,19);
            $table->decimal('Score_EcoS_uni',20,19);
            $table->decimal('Score_Res_uni' ,10,5);
            $table->string('Informations_Add',255);

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
        Schema::dropIfExists('ressource');
    }
}
