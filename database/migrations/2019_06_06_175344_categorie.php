<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Categorie extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorie', function (Blueprint $table) {
            $table->increments("idCategorie");
            $table->integer("Num_Affich");
            $table->string("Partie_InventaireEN", 20)->nullable();
            $table->string("Partie_InventaireFR", 20)->nullable();
            $table->string("Sub_CategorieEN", 20);
            $table->string("Sub_CategorieFR", 20);
            $table->string("Nom_CategorieEN", 20);
            $table->string("Nom_CategorieFR", 20);
            $table->integer('Scope');
            $table->float("Coefficient_GES")->nullable();
            $table->string('Scian_Code2', 20);
            $table->string('Scian_Code6', 100);

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
        Schema::dropIfExists('categorie');
    }
}
