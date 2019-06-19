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
            $table->bigIncrements('id'); //change

            $table->integer('Num_affiche');
            $table->string('Nom_RessourceEN', 45);
            $table->string('Nom_RessourceFR', 45);
            $table->string('Type_ressource',10);
            $table->string('Scian_Code2',20);
            $table->string('Scian_Code6',100);
            $table->string('Identifie_BD',10);
            $table->string('Categorie_1',20);
            $table->string('SCategorie_2',20);
            $table->string('SCategorie_3',20);
            $table->string('Nom_BD',100);
            $table->string('Unite_BD', 10);
            $table->float('Score_CC_uni');
            $table->float('Score_SH_uni');
            $table->float('Score_EcoS_uni');
            $table->float('Score_Res_uni');
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
