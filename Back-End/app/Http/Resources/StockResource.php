<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'idIngredient' => $this->idIngredient,
            'quantite' => $this->quantite,
            'dateEntre' => $this->dateEntre,
            'dateExpires' => $this->dateExpires,
            'prixTotale' => $this->prixTotale,
            'ingredient' => new IngredientResource($this->whenLoaded('ingredient')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
