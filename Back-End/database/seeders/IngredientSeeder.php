<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ingredients = [
            ['name' => 'Coffee Beans', 'prix' => 20.00],
            ['name' => 'Espresso', 'prix' => 15.00],
            ['name' => 'Milk', 'prix' => 10.00],
            ['name' => 'Almond Milk', 'prix' => 12.00],
            ['name' => 'Soy Milk', 'prix' => 11.00],
            ['name' => 'Sugar', 'prix' => 5.00],
            ['name' => 'Vanilla Syrup', 'prix' => 8.00],
            ['name' => 'Caramel Syrup', 'prix' => 9.00],
            ['name' => 'Hazelnut Syrup', 'prix' => 10.00],
            ['name' => 'Chocolate Syrup', 'prix' => 7.00],
            ['name' => 'Whipped Cream', 'prix' => 6.00],
            ['name' => 'Cinnamon', 'prix' => 3.00],
            ['name' => 'Nutmeg', 'prix' => 4.00],
            ['name' => 'Cocoa Powder', 'prix' => 5.50],
            ['name' => 'Matcha Powder', 'prix' => 20.00],
            ['name' => 'Honey', 'prix' => 8.50],
            ['name' => 'Lemon', 'prix' => 2.00],
            ['name' => 'Mint', 'prix' => 2.50],
            ['name' => 'Ginger', 'prix' => 3.00],
            ['name' => 'Orange Zest', 'prix' => 4.00],
            ['name' => 'Lavender', 'prix' => 6.00],
            ['name' => 'Water', 'prix' => 1.00],
        ];

        foreach ($ingredients as $ingredient) {
            DB::table('ingredients')->insert($ingredient);
        }
    }
}
