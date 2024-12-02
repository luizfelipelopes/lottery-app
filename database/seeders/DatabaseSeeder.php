<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Package;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Luiz Felipe',
            'email' => 'test@example.com',
            'password' => bcrypt('123.321Aa'),
        ]);

        Feature::create([
            'route_name' => 'feature_random_numbers.index',
            'image' => 'https://w7.pngwing.com/pngs/753/808/png-transparent-shamrock-four-leaf-clover-clover-thumbnail.png',
            'name' => 'Gerador de Números',
            'description' => 'Gere 6 Números Aletáorios',
            'required_credits' => 1,
            'active' => true,
        ]);

        Package::create([
            'name' => 'Basic',
            'price' => 5,
            'credits' => 7,
        ]);
        
        Package::create([
            'name' => 'Silver',
            'price' => 15,
            'credits' => 20,
        ]);
        
        Package::create([
            'name' => 'Gold',
            'price' => 25,
            'credits' => 50,
        ]);
    }
}
