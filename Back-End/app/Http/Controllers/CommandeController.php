<?php

namespace App\Http\Controllers;

use App\Models\typecommande;
use App\Models\typepaiment;
use Illuminate\Http\Request;
use App\Models\Commande;

class CommandeController extends Controller
{
    public function getCommandes()
    {
        $commandes = Commande::with(['user', 'produit', 'typeCommande', 'typePaiement'])->get();
        return response()->json($commandes);
    }

    public function getCommande($id)
    {
        $commande = Commande::with(['user', 'produit', 'typeCommande', 'typePaiement'])->find($id);

        if (!$commande) {
            return response()->json(['message' => 'Commande not found'], 404);
        }

        return response()->json($commande);
    }

    public function getTypePaiements()
    {
        $typePaiements = Typepaiment::all();
        return response()->json($typePaiements);
    }

    // Method to return all type commandes
    public function getTypeCommandes()
    {
        $typeCommandes = Typecommande::all();
        return response()->json($typeCommandes);
    }
}
