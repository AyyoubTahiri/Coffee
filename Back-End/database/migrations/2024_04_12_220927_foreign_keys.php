<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use function Laravel\Prompts\table;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('menus', function (Blueprint $table) {
            $table->foreign('IdProduit')->references('id')->on('produits')->onDelete('cascade')->onUpdate('cascade');

        });
        Schema::table('reservations', function (Blueprint $table) {
            $table->foreign('idCommande')->references('id')->on('commandes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idClient')->references('id')->on('clients')->onDelete('cascade')->onUpdate('cascade');


        });
        Schema::table('reservationtables', function (Blueprint $table) {
            $table->foreign('idTable')->references('id')->on('tablecafes')->onDelete('cascade')->onUpdate('cascade');


        });
        Schema::table('commandes', function (Blueprint $table) {
            $table->foreign('idProduit')->references('id')->on('produits')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idClient')->references('id')->on('clients')->onDelete('cascade')->onUpdate('cascade');
        });
        Schema::table('produits', function (Blueprint $table) {
            $table->foreign('idFeedback')->references('id')->on('feedbacks')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idJaims')->references('id')->on('jaims')->onDelete('cascade')->onUpdate('cascade');
        });
        Schema::table('jaims', function (Blueprint $table) {
            $table->foreign('idProduit')->references('id')->on('produits')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idClient')->references('id')->on('clients')->onDelete('cascade')->onUpdate('cascade');
        });
        Schema::table('feedbacks', function (Blueprint $table) {
            $table->foreign('idCommande')->references('id')->on('commandes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idClient')->references('id')->on('clients')->onDelete('cascade')->onUpdate('cascade');


        });
        Schema::table('stocks', function (Blueprint $table) {
            $table->foreign('idProduit')->references('id')->on('produits')->onDelete('cascade')->onUpdate('cascade');


        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
