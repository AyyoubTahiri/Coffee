<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IngredientResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'Prix' => $this->Prix,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
