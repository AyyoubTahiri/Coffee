<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User; // Import User model
use App\Models\Produit; // Import Produit model
use App\Models\TypeCommand; // Import TypeCommand model
use App\Models\Paiement; // Import Paiement model

class Commande extends Model
{
    use HasFactory;

    protected $fillable = ['idUser', 'idProduit', 'idTypeCommand', 'idPaiment', 'date', 'Prixtotal'];

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser');
    }

    public function produit()
    {
        return $this->belongsTo(Produit::class, 'idProduit');
    }

    public function typeCommande()
    {
        return $this->belongsTo(TypeCommande::class, 'idTypeCommand');
    }

    public function typePaiement()
    {
        return $this->belongsTo(typepaiment::class, 'idPaiment');
    }


}
