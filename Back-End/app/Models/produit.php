<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class produit extends Model
{
    use HasFactory;
        protected $fillable = [
            'nomProduit', 'Prix', 'description', 'idIngrediant', 'idCategorie',
        ];
        public function ingredient()
        {
            return $this->belongsTo(ingredient::class, 'idIngrediant');
        }

        public function categorie()
        {
            return $this->belongsTo(catégorie::class, 'idCategorie');
        }
    }
