<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Stock;

class StockTest extends TestCase
{
    public function testStocksAreCreatedCorrectly() {
        $payload = [
            'company_name' => 'Tesla',
            'price' => 765
        ];

        $this->json('POST', '/api/stocks', $payload)->assertStatus(201)->assertJson(['company_name' => 'Tesla', 'price' => 765]);
    }

    public function testStocksAreListedCorrectly() {
        Stock::factory()->create([
            'company_name' => 'Apple',
            'price' => 1290
        ]);

        Stock::factory()->create([
            'company_name' => 'IBM',
            'price' => 290
        ]);

        $response = $this->json('GET', '/api/stocks', [])->assertStatus(200)->assertJson([['company_name' => 'Tesla', 'price' => 765], ['company_name' => 'Apple', 'price' => 1290], ['company_name' => 'IBM', 'price' => 290]]);
    }

    public function testStocksAreDeletedCorrectly() {
        $stock = Stock::factory()->create([
            'company_name' => 'Amazon',
            'price' => 809
        ]);

        $this->json('DELETE', '/api/stocks/' . $stock->id, [])
            ->assertStatus(200);
    }

    public function testStocksAreUpdatedCorrectly() {
        $stock = Stock::factory()->create([
            'company_name' => 'GME',
            'price' => 225
        ]);

        $payload = [
            'company_name' => 'GME',
            'price' => 325
        ];

        $response = $this->json('PUT', '/api/stocks/' . $stock->id, $payload)->assertStatus(200)->assertJson(['company_name' => 'GME', 'price' => 325]);
    }

    public function testStocksArePurchasedCorrectly() {
        $payload = [
            'client_id' => 1,
            'stock_id' => 1,
            'volume' => 100,
            'purchase_price' => 1,
        ];

        $this->json('POST', '/api/stockinclients', $payload)->assertStatus(201)->assertJson(['client_id' => '1', 'stock_id' => 1, 'volume' => 100, 'purchase_price' => 1]);
    }
}
