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
            $table->string("BusinessType", 50);
            $table->string("SectorActivity", 50);
            $table->string("BusinessClass", 50);
            $table->string("NumberEmployee", 50);
            $table->string("SustainableCommittee", 50);
            $table->string("BusinessOperation", 50);
            $table->string("BusinessClientBase", 50);
            $table->string("OfferToClients", 300);
            $table->string("BusinessAnnualIncome", 50);
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
