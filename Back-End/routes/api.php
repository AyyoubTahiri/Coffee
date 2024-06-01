<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\controllerCmd;
use App\Http\Controllers\controllerJaims;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("/login", [AuthenticatedSessionController::class, 'store']);

Route::post("/register", [RegisteredUserController::class, 'store']);


Route::get('/users', [UserController::class, 'index']);
Route::get('/users', [controllerCmd::class, 'index']);
Route::get('/users', [controllerJaims::class, 'index']);
Route::get('/users', [controllerRes::class, 'index']);
Route::get('/users', [controllerRole::class, 'index']);
Route::get('/users', [IngredientController::class, 'index']);
Route::get('/users', [ProduitController::class, 'index']);
Route::get('/users', [StockController::class, 'index']);
Route::get('/users', [UserController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::post('/add-users', [UserController::class, 'store']);
Route::put('users/{id}', [UserController::class, 'update']);
Route::delete('users/{id}', [UserController::class, 'destroy']);
Route::apiResource('produits', ProduitController::class);
Route::apiResource('categories', CategorieController::class);
Route::apiResource('ingredients', IngredientController::class);
Route::apiResource('stocks', StockController::class);
