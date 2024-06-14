<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("/", [\App\Http\Controllers\Web\Auth\AuthenticationController::class, 'login'])->name("root.login");
Route::group(["middleware" => ["web", "inertia.error"]], function () {
    Route::get("/login", [\App\Http\Controllers\Web\Auth\AuthenticationController::class, 'login'])->name("login");
    Route::post("/login", [\App\Http\Controllers\Web\Auth\AuthenticationController::class, 'login'])->name("login.post");

    Route::get("/sign-in", [\App\Http\Controllers\Web\Auth\AuthenticationController::class, 'SignIn']);
    Route::post("/sign-in", [\App\Http\Controllers\Web\Auth\AuthenticationController::class, 'SignIn']);
});

Route::group(["middleware" => "auth"], function () {
    Route::get("/token-app", [\App\Http\Controllers\Web\Auth\AuthenticationController::class, 'tokenClinetRedirect'])->name("login.create.token.app");

    Route::group(["prefix" => "home"], function () {
        Route::get("/", [\App\Http\Controllers\Web\Home\HomeControler::class, 'index'])->name("home");
    });
});


Route::get("/load-data", [\App\Http\Controllers\Web\Auth\AuthenticationController::class, 'loadData']);
