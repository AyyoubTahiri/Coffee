<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProduitRequest;
use App\Http\Requests\UpdateProduitRequest;
use App\Http\Resources\ProduitResource;
use App\Models\produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    //{
        public function index()
{
    $produits = Produit::with(['categorie', 'ingredients'])->get();
    return response()->json($produits);
}

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nomProduit' => 'required|string|max:255',
            'Prix' => 'required|numeric',
            'description' => 'nullable|string',
            'idCategorie' => 'required|exists:categories,id',
            'ingredients' => 'required|array',
            'ingredients.*' => 'exists:ingredients,id',
        ]);

        // Create the produit
        $produit = Produit::create([
            'nomProduit' => $validatedData['nomProduit'],
            'Prix' => $validatedData['Prix'],
            'description' => $validatedData['description'],
            'idCategorie' => $validatedData['idCategorie'],
        ]);

        // Attach ingredients to the produit
        $produit->ingredients()->attach($validatedData['ingredients']);

        return response()->json([
            'message' => 'Produit created successfully.',
            'produit' => $produit
        ], 201);
    }

    public function show(Produit $produit)
    {
        return new ProduitResource($produit->load(['ingredient', 'categorie']));
    }

    public function update(UpdateProduitRequest $request, Produit $produit)
    {
        $produit->update($request->validated());
        return new ProduitResource($produit);
    }

    public function destroy(Produit $produit)
    {
        $produit->delete();
        return response()->noContent();
    }
}

