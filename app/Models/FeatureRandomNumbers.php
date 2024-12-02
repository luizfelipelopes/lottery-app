<?php

namespace App\Models;

class FeatureRandomNumbers extends Feature
{
    public function generateNumbers(int $number): array
    {
        $numbers = [];

        while (count($numbers) < $number) {
            $randNumber = str_pad(rand(1,60), 2, 0, STR_PAD_LEFT);

            if(!in_array($randNumber, $numbers)) {
                $numbers[] = $randNumber;
            }
        }

        return $numbers;
    }
}
