<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stock;

class StockController extends Controller
{
    //
    public function index() {
        return Stock::all();
    }

    public function show($id) {
        return Stock::find($id);
    }

    public function add(Request $request) {
        return Stock::create($request->all());
    }

    public function update(Request $request, $id) {
        $stock = Stock::findOrFail($id);
        $stock->update($request->all());

        return $stock;
    }

    public function delete(Request $request, $id) {
        $stock = Stock::findOrFail($id);
        $stock->delete();

        return 204;
    }
}
