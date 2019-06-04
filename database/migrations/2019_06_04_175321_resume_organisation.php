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

            $table->increments("Organisation_idOrganisation");
            $table->
            foreign("Organisation_idOrganisation")->
            references("idOrganisation")->
            on("organisation");
           $table->string("NombreEmployes", 30);
           $table->integer("ChiffreDaffaires");
           $table->boolean("ComiteDD");
           $table->integer("AnneeComiteDD");
           $table->integer("ACV");
           $table->integer("IdInventaire");
           $table->integer("PlanAction");

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
