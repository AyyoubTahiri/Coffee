<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStockRequest extends FormRequest

    {
        public function authorize()
        {
            return true;
        }

        public function rules()
        {
            return [
                'idIngredient' => 'sometimes|required|exists:ingredients,id',
                'quantite' => 'sometimes|required|string|max:255',
                'dateEntre' => 'sometimes|required|date',
                'dateExpires' => 'sometimes|required|date',
                'prixTotale' => 'sometimes|required|string|max:255',
            ];
        }
}
