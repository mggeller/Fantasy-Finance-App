<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock_In_Clients extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'stock_id',
        'volume',
        'purchase_price'
    ];

}
