<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class catégorie extends Model

{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function produits()
    {
        return $this->hasMany(Produit::class, 'idCategorie');
    }
}
