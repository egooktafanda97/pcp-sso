<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;

class DirectLoginController extends Controller
{
    public function directLogin(Request $request)
    {
        $user = Auth::user();
        // $clinetId = $request->get("id");
        $query = [
            'grant_type' => 'client_credentials',
            'client_id' => '9b36fdc3-859b-4e91-8ad7-e59b76609e93',
            'client_secret' => 'oo9aK4V4HxYn5EKQbXVsNJ3w8yDr1GyEGG2mCx34',
            'scope' => '*',
        ];
        $response = Http::asForm()->post(url("") . '/oauth/token', $query);
        $query = http_build_query(collect($response->json())->toArray());
        return redirect('https://dashops.pcpexpress.com/sso/callback?query=' . $query);
    }
}
