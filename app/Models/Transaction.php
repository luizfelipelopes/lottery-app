<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'status',
        'price',
        'credits',
        'user_id',
        'package_id',
        'session_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}

