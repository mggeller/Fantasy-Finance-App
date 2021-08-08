<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\StockInClientsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('/clients', [ClientController::class, 'index']);
Route::get('/clients/{id}', [ClientController::class, 'show']);
Route::post('/clients', [ClientController::class, 'add']);
Route::put('/clinets/{id}', [ClientController::class, 'update']);
Route::delete('/clients/{id}', [ClientController::class, 'delete']);

Route::get('/stocks', [StockController::class, 'index']);
Route::get('/stocks/{id}', [StockController::class, 'show']);
Route::post('/stocks', [StockController::class, 'add']);
Route::put('/stocks/{id}', [StockController::class, 'update']);
Route::delete('/stocks/{id}', [StockController::class, 'delete']);

Route::get('/stockinclients', [StockInClientsController::class, 'index']);
Route::get('/stockinclients/{id}', [StockInClientsController::class, 'show']);
Route::post('/stockinclients', [StockInClientsController::class, 'add']);
Route::put('/stockinclients/{id}', [StockInClientsController::class, 'update']);
Route::delete('/stockinclients/{id}', [StockInClientsController::class, 'delete']);
