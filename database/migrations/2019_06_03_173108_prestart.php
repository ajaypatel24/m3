<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Prestart extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("prestart", function(Blueprint $table) {

            $table->increments("id");
            $table->string("BusinessName", 50)->nullable();
            $table->string("QuebecAddress", 50)->nullable();
            $table->string("City", 50)->nullable();
            $table->string("PostalCode", 50)->nullable();
            $table->string("CorporateAddress", 50)->nullable();
            $table->string("SectorActivity", 50)->nullable();
            $table->string("BusinessClass", 50)->nullable();
            $table->string("BusinessType", 50)->nullable();
            $table->string("ExistCommittee", 50)->nullable();
            $table->string("BusinessLevel", 50)->nullable();
            $table->string("BusinessClientBase", 50)->nullable();
            $table->string("OfferToClient", 300)->nullable();
            $table->string("IncomeValue", 50)->nullable();
            $table->string("EmployeeNumber", 50)->nullable();

            $table->timestamps();




        });
    }

    /**
     * database creating done here
     */

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("prestart");
    }
}
