<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
   
    public function run()
    {
        // Create a specific user with a custom password
        User::factory()->password('ayyoubhaytam1999')->create([
            'name' => 'Ayyoub TAHIRI',
            'email' => 'ayyoub@gmail.com',
        ]);
        User::factory(10)->create();
    }
}
