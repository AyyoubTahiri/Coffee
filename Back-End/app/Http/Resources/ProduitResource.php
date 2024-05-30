<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProduitResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nomProduit' => $this->nomProduit,
            'Prix' => $this->Prix,
            'description' => $this->description,
            'ingredient' => new IngredientResource($this->whenLoaded('ingredient')),
            'categorie' => new CategorieResource($this->whenLoaded('categorie')),
        ];
    }
}
