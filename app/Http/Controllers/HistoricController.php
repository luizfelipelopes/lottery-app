<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsedFeatureResource;
use App\Models\UsedFeature;
use Inertia\Inertia;

class HistoricController extends Controller
{
    public function index()
    {
        $usedFeatures = UsedFeature::query()
        ->with(['feature'])
        ->where('user_id', auth()->user()->id)
        ->get();

        return Inertia::render('Historic', [
            'usedFeatures' => UsedFeatureResource::collection($usedFeatures)
        ]);
    }
}
