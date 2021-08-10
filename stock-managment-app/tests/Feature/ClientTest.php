<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Client;

class ClientTest extends TestCase
{
    public function testClientsAreCreatedCorrectly() {
        $payload = [
            'username' => 'Username1',
            'portfolio' => 1000
        ];

        $this->json('POST', '/api/clients', $payload)->assertStatus(201)->assertJson(['username' => 'Username1', 'portfolio' => 1000]);
    }

    public function testCleintsAreListedCorrectly() {
        Client::factory()->create([
            'username' => 'Username2',
            'portfolio' => 1000
        ]);

        Client::factory()->create([
            'username' => 'Username3',
            'portfolio' => 1000
        ]);

        $response = $this->json('GET', '/api/clients', [])->assertStatus(200)->assertJson([['username' => 'Username1', 'portfolio' => 1000], ['username' => 'Username2', 'portfolio' => 1000], ['username' => 'Username3', 'portfolio' => 1000]]);
    }

    public function testClientsAreDeletedCorrectly() {
        $client = Client::factory()->create([
            'username' => 'Username4',
            'portfolio' => 1000
        ]);

        $this->json('DELETE', '/api/clients/' . $client->id, [])
            ->assertStatus(200);
    }
}
