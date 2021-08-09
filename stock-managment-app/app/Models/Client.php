<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'portfolio',
    ];

    public function stocks() {
        return $this->belongsToMany(Stock::class, 'stock__in__clients')->withPivot('volume', 'purchase_price');
    }
}
