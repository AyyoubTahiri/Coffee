<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class produit extends Model
{
    use HasFactory;
    protected $fillable = [
        'nomProduit', 'Prix', 'description', 'idCategorie',
    ];

    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'idCategorie');
    }

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'produit_ingredient', 'produit_id', 'ingredient_id');
    }
    }
