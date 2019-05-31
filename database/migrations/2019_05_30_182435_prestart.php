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
            $table->string("BusinessName", 50);
            $table->string("QuebecAddress", 50);
            $table->string("City", 50);
            $table->string("PostalCode", 50);
            $table->string("CorporateAddress", 50);
            $table->string("IncomeValue", 50);
            $table->string("SCIAN", 50);
            $table->string("EmployeeNumber", 50);
            $table->string("OfferToClient", 50);
            $table->string("Confirm", 50);
            $table->timestamp();

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
