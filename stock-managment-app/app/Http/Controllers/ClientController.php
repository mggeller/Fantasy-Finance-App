<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    //
    public function index() {
        return Client::all();
    }

    public function show($id) {
        return Client::with('stocks')->find($id);
    }

    public function add(Request $request) {
        return Client::create($request->all());
    }

    public function update(Request $request, $id) {
        $client = Client::findOrFail($id);
        $client->update($request->all());

        return $client;
    }

    public function delete(Request $request, $id) {
        $client = Client::findOrFail($id);
        $client->delete();

        return 204;
    }

}
