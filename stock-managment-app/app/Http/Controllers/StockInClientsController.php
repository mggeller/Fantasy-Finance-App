<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stock_In_Clients;

class StockInClientsController extends Controller
{
    //
    public function index() {
        return Stock_In_Clients::all();
    }

    public function show($id) {
        return Stock_In_Clients::find($id);
    }

    public function add(Request $request) {
        return Stock_In_Clients::create($request->all());
    }

    public function update(Request $request, $id) {
        $stockInClients = Stock_In_Clients::findOrFail($id);
        $stockInClients->update($request->all());

        return $stockInClients;
    }

    public function delete(Request $request, $id) {
        $stockInClients = Stock_In_Clients::findOrFail($id);
        $stockInClients->delete();

        return 204;
    }
}
