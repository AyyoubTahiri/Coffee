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
        return response()->json(["data"=>Stock::all()]);
        
    }
    public function store(StoreStockRequest $request)
    {
        $stock = Stock::create($request->validated());
        return new StockResource($stock);
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
