<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('Users', function (Blueprint $table) {
            $table->foreign('idRole')->references('id')->on('Role')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('reservations', function (Blueprint $table) {
            $table->foreign('idTable')->references('id')->on('tablecafes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idCommande')->references('id')->on('commandes')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('commandes', function (Blueprint $table) {
            $table->foreign('idUser')->references('id')->on('Users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idProduit')->references('id')->on('produits')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idTypeCommand')->references('id')->on('typecommandes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idPaiment')->references('id')->on('typePaiment')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('produits', function (Blueprint $table) {
            $table->foreign('idIngrediant')->references('id')->on('ingredient')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idCategorie')->references('id')->on('catégorie')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('jaims', function (Blueprint $table) {
            $table->foreign('idUser')->references('id')->on('Users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idProduit')->references('id')->on('produits')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('stocks', function (Blueprint $table) {
            $table->foreign('idIngredient')->references('id')->on('ingredient')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('commentaire', function (Blueprint $table) {
            $table->foreign('idUser')->references('id')->on('Users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idProduit')->references('id')->on('produits')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('Users', function (Blueprint $table) {
            $table->dropForeign(['idRole']);
        });

        Schema::table('reservations', function (Blueprint $table) {
            $table->dropForeign(['idTable']);
            $table->dropForeign(['idCommande']);
        });

        Schema::table('commandes', function (Blueprint $table) {
            $table->dropForeign(['idUser']);
            $table->dropForeign(['idProduit']);
            $table->dropForeign(['idTypeCommand']);
            $table->dropForeign(['idPaiment']);
        });

        Schema::table('produits', function (Blueprint $table) {
            $table->dropForeign(['idIngrediant']);
            $table->dropForeign(['idCategorie']);
        });

        Schema::table('jaims', function (Blueprint $table) {
            $table->dropForeign(['idUser']);
            $table->dropForeign(['idProduit']);
        });

        Schema::table('stocks', function (Blueprint $table) {
            $table->dropForeign(['idIngredient']);
        });

        Schema::table('commentaire', function (Blueprint $table) {
            $table->dropForeign(['idUser']);
            $table->dropForeign(['idProduit']);
        });
    }
};
