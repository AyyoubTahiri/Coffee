<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

    public function run()
    {
        // Create a specific user with a custom password
        User::factory()->create([
            'password'=>Hash::make("haytam123456789"),
            'name' => 'HAytam ',
            'email' => 'haytam@gmail.com',
        ]);

    }
}
