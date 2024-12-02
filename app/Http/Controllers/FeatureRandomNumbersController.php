<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use App\Models\FeatureRandomNumbers;
use App\Models\UsedFeature;
use Illuminate\Http\Request;

class FeatureRandomNumbersController extends Controller
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

    public function generateNumbers(Request $request)
    {
        $user = $request->user();
        if($user->available_credits < $this->feature->required_credits) {
            return back();
        }

        $featuredRandomNumber = new FeatureRandomNumbers();
        $numbers = $featuredRandomNumber->generateNumbers(6);

        $user->decreaseCredits($this->feature->required_credits);

        UsedFeature::create([
            'feature_id' => $this->feature->id,
            'user_id' => $user->id,
            'credits' => $this->feature->required_credits,
            'data' => $numbers,
        ]);

        return to_route('feature_random_numbers.index')->with('answer', $numbers);
    }
}
