<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

        public function run()
    {
        $categories = [
            'Boissons',
            'Sodas',
            'Jus',
            'Cafés',
            'Thés',
            'Pâtisseries',
            'Sandwiches',
            'Salades',
            'Snacks',
            'Desserts',
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
