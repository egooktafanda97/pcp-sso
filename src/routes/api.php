<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::get("/me", [\App\Http\Controllers\Api\ApiAuthenticationControler::class, "getMe"]);
// Route::group(["middleware" => "auth:api"], function () {
//     Route::get("/me", [\App\Http\Controllers\Api\ApiAuthenticationControler::class, "getMe"]);
// });
Route::get("/direc", [\App\Http\Controllers\Api\DirectLoginController::class, "directLogin"]);
