<?php

namespace Database\Factories;

use App\Models\Stock_In_Clients;
use Illuminate\Database\Eloquent\Factories\Factory;

class StockInClientsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Stock_In_Clients::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'client_id' => 1,
            'stock_id' => 1,
            'volume' => 100,
            'purchase_price' => 1,
        ];
    }
}
