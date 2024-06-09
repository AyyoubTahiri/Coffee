<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Typepaiment extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'prix'];

    public function commandes()
    {
        return $this->hasMany(Commande::class, 'idPaiment');
    }
}
