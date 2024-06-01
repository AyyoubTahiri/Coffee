<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        DB::table('users')->insert([
            [
                'nom' => 'admin',
                'prenom' => 'admin',
                'address' => '123 Main St',
                'email' => 'admin@example.com',
                'numero' => '1234567890',
                'password' => Hash::make('admin123456789'), // Encrypt the password
                'idRole' => 1, // Assuming 1 is the role ID for Admin
                'email_verified_at' => $now,
                'remember_token' => Str::random(10),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nom' => 'Gestionnaire',
                'prenom' => 'Gestionnaire',
                'address' => '456 Elm St',
                'email' => 'gestionnaire@example.com',
                'numero' => '0987654321',
                'password' => Hash::make('gestionnaire123456789'), // Encrypt the password
                'idRole' => 2, // Assuming 2 is the role ID for Gestionnaire
                'email_verified_at' => $now,
                'remember_token' => Str::random(10),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nom' => 'Client',
                'prenom' => 'Client',
                'address' => '789 Pine St',
                'email' => 'client@example.com',
                'numero' => '1231231234',
                'password' => Hash::make('client123456789'), // Encrypt the password
                'idRole' => 3, // Assuming 3 is the role ID for Client
                'email_verified_at' => $now,
                'remember_token' => Str::random(10),
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'nom' => 'Personnel',
                'prenom' => 'Personnel',
                'address' => '321 Oak St',
                'email' => 'personnel@example.com',
                'numero' => '3213214321',
                'password' => Hash::make('personnel123456789'), // Encrypt the password
                'idRole' => 4, // Assuming 4 is the role ID for Personnel
                'email_verified_at' => $now,
                'remember_token' => Str::random(10),
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
