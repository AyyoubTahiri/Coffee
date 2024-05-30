<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProduitRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'nomProduit' => 'sometimes|required|string|max:255',
            'Prix' => 'sometimes|required|numeric',
            'description' => 'sometimes|required|string',
            'idIngrediant' => 'sometimes|required|exists:ingredients,id',
            'idCategorie' => 'sometimes|required|exists:categories,id',
        ];
    }
}
