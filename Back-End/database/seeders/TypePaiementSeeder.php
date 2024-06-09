<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypePaiementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('typepaiements')->insert([
            ['name' => 'avec card', 'prix' => '4'],
            ['name' => 'avec espece', 'prix' => '2'],
        ]);

    }
}
