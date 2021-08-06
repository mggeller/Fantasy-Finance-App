<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Stock;

class StocksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // Stock::truncate();

        $faker = \Faker\Factory::create();

        for ($i=0; $i < 5; $i++) { 
            # code...
            Stock::create([
                'company_name' => $faker->name,
                'price' => $faker->unique()->numberBetween(1, 20),
            ]);
        }
    }
}
