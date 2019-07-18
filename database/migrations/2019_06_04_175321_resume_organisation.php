<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ResumeOrganisation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("resumeorganisation", function(Blueprint $table) {



            $table->string("Organisation_idOrganisation");
            $table->
            foreign("Organisation_idOrganisation")->
            references("idOrganisation")->
            on("organisation");




           $table->integer("Nb_employes");
           $table->integer("Chiffre_affaires");
           $table->boolean("Comite_DD");
           $table->integer("Annee_ComDD");
           $table->integer("Nb_ACVProduit");
           $table->integer("Nb_Scenario_ACV");
           $table->integer("Nb_Inventaire");
           $table->integer("Plan_Action");

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
        Schema::dropIfExists('resumeorganisation');
    }
}
