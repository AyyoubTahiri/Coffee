<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStockRequest;
use App\Http\Requests\UpdateStockRequest;
use App\Http\Resources\StockResource;
use App\Models\stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function index()
{
    $stocks = stock::with('ingredient')->get();
    return response()->json($stocks);
}
    public function store(Request $request)
    {
        $request->validate([
            'idIngredient' => 'required|exists:ingredients,id',
            'quantite' => 'required|integer',
            'dateEntre' => 'required|date',
            'dateExpires' => 'required|date',
            'prixTotale' => 'required|numeric',
        ]);

        $stock = new stock();
        $stock->idIngredient = $request->idIngredient;
        $stock->quantite = $request->quantite;
        $stock->dateEntre = $request->dateEntre;
        $stock->dateExpires = $request->dateExpires;
        $stock->prixTotale = $request->prixTotale;
        $stock->save();

        return response()->json(['message' => 'Stock added successfully'], 201);
    }

    public function show(Stock $stock)
    {
        return new StockResource($stock->load('ingredient'));
    }

    public function update(UpdateStockRequest $request, Stock $stock)
    {
        $stock->update($request->validated());
        return new StockResource($stock);
    }

    public function destroy(Stock $stock)
    {
        $stock->delete();
        return response()->noContent();
    }
}
