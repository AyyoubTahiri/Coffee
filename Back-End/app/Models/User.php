<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;  // Import the Sanctum HasApiTokens trait

class User extends Authenticatable
{
    use Notifiable, HasApiTokens; // Include HasApiTokens trait

    // Rest of the User model code...
}