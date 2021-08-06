<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Stock_In_Clients;

class StockInClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create();

        Stock_In_Clients::create([
            'client_id' => 1,
            'stock_id' => 1,
            'volume' => 100,
            'purchase_price' => 1,
        ]);
    }
}
