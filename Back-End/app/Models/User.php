<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $fillable = [
        'id','nom', 'prenom', 'address', 'email', 'numero', 'password', 'idRole'
    ];
    public function role()
    {
        return $this->belongsTo(Role::class, 'idRole');
    }
}
