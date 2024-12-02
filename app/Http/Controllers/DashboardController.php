<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public ?Feature $feature = null;

    public function __construct()
    {
        $this->feature = Feature::where("route_name", 'feature_random_numbers.index')
        ->where('active', true)
        ->firstOrFail();
    }
    
    public function index()
    {
        return inertia('FeatureRandomNumbers/Index', [
            'feature' => new FeatureResource($this->feature),
            'answer' => session('answer')
        ]);
    }
}
