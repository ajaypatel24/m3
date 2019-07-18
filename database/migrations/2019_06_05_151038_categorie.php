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

            $table->string("idCategorie")->primary();
            $table->string("Num_Affich");
            $table->string("Partie_InventaireFR", 100)->nullable();
            $table->string("Sub_CategorieFR", 100);
            $table->string("Nom_CategorieFR", 100);
            $table->string("Partie_InventaireEN", 100)->nullable();
            $table->string("Sub_CategorieEN", 100);
            $table->string("Nom_CategorieEN", 100);
            $table->integer('Scope')->default(-1);
            $table->string('Poste_Emission',5)->nullable();
            $table->decimal("Coefficient_GES", 10,4)->default(-1);
            $table->boolean("Transport_Emp")->nullable();
            $table->string('Scian_Code2', 20)->nullable();
            $table->string('Scian_Code6', 100)->nullable();
            $table->string('Nom_BD', 60)->nullable();
            $table->string('Identifie_BD', 10)->nullable();

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
