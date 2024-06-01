<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStockRequest extends FormRequest

    {
        public function authorize()
        {
            return true;
        }

        public function rules()
        {
            return [
                'idIngredient' => 'required|exists:ingredients,id',
                'quantite' => 'required|string|max:255',
                'dateEntre' => 'required|date',
                'dateExpires' => 'required|date',
                'prixTotale' => 'required|string|max:255',
            ];
        }
}
