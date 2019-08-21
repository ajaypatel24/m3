<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Registration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


        Schema::create('register', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uid')->index();
            $table->string('name',30);
            $table->string('organization');
            $table->string('fonction',20)->nullable();
            $table->string('email');
            $table->string('telephone',30)->nullable();
            $table->string('Poste_telephone',30)->nullable();
            $table->string('telephone2',20)->nullable();
            $table->string('langue',2)->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('register');
    }
}
