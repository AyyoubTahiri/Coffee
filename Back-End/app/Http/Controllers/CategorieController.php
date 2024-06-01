<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategorieRequest;
use App\Http\Requests\UpdateCategorieRequest;
use App\Http\Resources\CategorieResource;
use App\Models\catégorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
     public function index()
    {
        return response()->json(["data"=>catégorie::all()]);
    }

    public function store(StoreCategorieRequest $request)
    {
        $categorie = catégorie::create($request->validated());
        return new CategorieResource($categorie);
    }

    public function show(catégorie $categorie)
    {
        return new CategorieResource($categorie);
    }

    public function update(UpdateCategorieRequest $request, catégorie $categorie)
    {
        $categorie->update($request->validated());
        return new CategorieResource($categorie);
    }

    public function destroy(catégorie $categorie)
    {
        $categorie->delete();
        return response()->noContent();
    }
}
