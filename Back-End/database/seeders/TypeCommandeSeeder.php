<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeCommandeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('typecommandes')->insert([
            ['name' => 'take away', 'prix' => '2'],
            ['name' => 'reservation', 'prix' => '3'],
            ['name' => 'livraison', 'prix' => '3'],
        ]);
    }
}
