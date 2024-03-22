<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

class ApiAuthenticationControler
{
    public function getMe(Request $request)
    {
        return response()->json(["ok"]);
        // return response()->json(auth()->user());
    }
}
