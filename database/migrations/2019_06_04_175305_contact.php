<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Contact extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("contact", function(Blueprint $table) {


            $table->increments("Organisation_idOrganisation");
            $table->
            foreign("Organisation_idOrganisation")->
            references("idOrganisation")->
            on("organisation");



            $table->string("CleIdentifiant", 30);
            $table->string("Nom", 30);
            $table->string("Prenom", 30);
            $table->integer("IdOrganisation");
            $table->string("Fonction", 30);
            $table->string("Courriel", 30);
            $table->string("Telephone", 30);
            $table->string("PosteTelephone", 30);
            $table->string("Telephone2", 30)->nullable();
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
        Schema::dropIfExists("contact");
    }
}
