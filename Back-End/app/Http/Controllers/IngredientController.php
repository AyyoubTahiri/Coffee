<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreIngredientRequest;
use App\Http\Requests\UpdateIngredientRequest;
use App\Http\Resources\IngredientResource;
use App\Models\Ingredient;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    //{
        public function index()
        {
            $ingredients = Ingredient::all();
            return response()->json($ingredients);
        }

    public function store(StoreIngredientRequest $request)
    {
        $ingredient = ingredient::create($request->validated());
        return new IngredientResource($ingredient);
    }

    public function show(ingredient $ingredient)
    {
        return new IngredientResource($ingredient);
    }

    public function update(UpdateIngredientRequest $request, ingredient $ingredient)
    {
        $ingredient->update($request->validated());
        return new IngredientResource($ingredient);
    }

    public function destroy(ingredient $ingredient)
    {
        $ingredient->delete();
        return response()->noContent();
    }
}
