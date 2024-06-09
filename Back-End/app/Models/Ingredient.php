<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'prix'];

    public function produits()
    {
        return $this->belongsToMany(Produit::class, 'produit_ingredient', 'ingredient_id', 'produit_id');
    }

}
