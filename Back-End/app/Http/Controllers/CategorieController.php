<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategorieRequest;
use App\Http\Requests\UpdateCategorieRequest;
use App\Http\Resources\CategorieResource;


use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index()
    {
        $stocks = Categorie::all();
        return response()->json($stocks);
    }

    public function store(StoreCategorieRequest $request)
    {
        $categorie = categorie::create($request->validated());
        return new CategorieResource($categorie);
    }

    public function show(categorie $categorie)
    {
        return new CategorieResource($categorie);
    }

    public function update(UpdateCategorieRequest $request, categorie $categorie)
    {
        $categorie->update($request->validated());
        return new CategorieResource($categorie);
    }

    public function destroy(categorie $categorie)
    {
        $categorie->delete();
        return response()->noContent();
    }
}
