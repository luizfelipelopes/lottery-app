<?php

use App\Models\Feature;
use App\Models\Package;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Package::where('name', 'Basic')->update([
            'credits' => 10
        ]);
        
        Package::where('name', 'Silver')->update([
            'credits' => 40
        ]);
        
        Package::where('name', 'Gold')->update([
            'credits' => 100
        ]);

        Feature::where('route_name', 'feature_random_numbers.index')->update([
            'description' => 'Gere 6 Números Aleatórios'
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Package::where('name', 'Basic')->update([
            'credits' => 7
        ]);
        
        Package::where('name', 'Silver')->update([
            'credits' => 20
        ]);
        
        Package::where('name', 'Gold')->update([
            'credits' => 50
        ]);
    }
};
