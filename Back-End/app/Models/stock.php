<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stock extends Model
    {
        use HasFactory;

        protected $fillable = [
            'idIngredient', 'quantite', 'dateEntre', 'dateExpires', 'prixTotale',
        ];

        public function ingredient()
        {
            return $this->belongsTo(Ingredient::class, 'idIngredient');
        }
}
