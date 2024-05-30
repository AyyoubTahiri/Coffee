<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProduitRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */

        public function authorize()
        {
            return true;
        }

        public function rules()
        {
            return [
                'nomProduit' => 'required|string|max:255',
                'Prix' => 'required|numeric',
                'description' => 'required|string',
                'idIngrediant' => 'required|exists:ingredients,id',
                'idCategorie' => 'required|exists:categories,id',
            ];
        }
    }

