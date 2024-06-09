<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommandeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("/login", [AuthenticatedSessionController::class, 'store']);

Route::post("/register", [RegisteredUserController::class, 'store']);

// Route::get('/users', [UserController::class, 'index']);
Route::get('/get-users', [UserController::class, 'index']);
Route::post('/add-users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
Route::apiResource('/produits', ProduitController::class);
Route::apiResource('/categories', CategorieController::class);
Route::get('/get-ingredient', [IngredientController::class,'index']);
Route::apiResource('/add-stocks', StockController::class);
Route::get('/get-stocks', [StockController::class,'index']);
Route::apiResource('/add-produits', ProduitController::class);
Route::get('/get-produits', [ProduitController::class,'index']);
Route::get('/get-categories', [CategorieController::class,'index']);
Route::get('/get-roles', [RoleController::class,'index']);

// New routes for fetching orders
Route::get('/past-orders', [CommandeController::class, 'getPastOrders']);
Route::get('/current-orders', [CommandeController::class, 'getCurrentOrders']);


Route::get('/commandes', [CommandeController::class, 'getCommandes']);
Route::get('/commandes/{id}', [CommandeController::class, 'getCommande']);
Route::get('/type-paiements', [CommandeController::class, 'getTypePaiements']);
Route::get('/type-commandes', [CommandeController::class, 'getTypeCommandes']);
