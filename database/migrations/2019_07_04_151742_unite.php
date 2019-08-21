<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Unite extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unite', function(Blueprint $table){
        $table->increments('id');
        $table->string('IdUnite', 10);
        $table->string('Lib_unitFR', 60);
        $table->string('Lib_unitEN', 60);
        $table->string('Type_unit', 20);
        $table->string('Label', 25);

    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
