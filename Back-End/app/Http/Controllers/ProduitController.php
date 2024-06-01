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
        return response()->json(["data"=>produit::all()]);
    }

    public function store(StoreProduitRequest $request)
    {
        $produit = Produit::create($request->validated());
        return new ProduitResource($produit);
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

