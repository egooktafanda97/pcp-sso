<?php

namespace App\Http\Controllers\Web\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Laravel\Passport\Passport;

use Throwable;

class AuthenticationController extends Controller
{
    public function login(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'username' => 'required|string',
                'password' => 'required',
            ]);
            $credentials = $request->only('username', 'password');
            $intended = session("url.intended");

            if (Auth::attempt($credentials)) {
                Auth::user();

                if ($intended  != null) {

                    return Inertia::location($intended);
                } else {
                    return Inertia::location(route('home'));
                }
            }
            return Redirect::back()->with('errors', 'Credenciales incorrectas');
        }

        return Inertia::render('Auth/Login');
    }

    public function signIn(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'username' => 'required|string',
                'password' => 'required',
            ]);
            $credentials = $request->only('username', 'password');
            if (Auth::attempt($credentials)) {
                Auth::user();
                return Inertia::location(route('home'));
            }
            return Redirect::back()->with('errors', 'Credenciales incorrectas');
        }

        return Inertia::render('Auth/SignIn');
    }

    public function isAuth(Request $request)
    {

        $request->validate([
            'username' => 'required|string',
            'password' => 'required',
        ]);
        $credentials = $request->only('username', 'password');
        if (Auth::attempt($credentials)) {
            Auth::user();

            if (session("url.intended") != null) {
                return Inertia::location(session('url.intended'));
            } else {
                return Inertia::location(route('home'));
            }
        }
        return to_route('login')->with('error', 'Credenciales incorrectas');
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function tokenClinetRedirect()
    {

        // $token = $user->createToken('WebApp')->accessToken;
        $user = Auth::user();
        $token = auth()->user()->createToken('adminToken')->accessToken;
        dd($token);
    }

    public function loadData()
    {
        $getMe = Http::get('https://dashops.pcpexpress.com/sso/login')->json();
        // collect($getMe)->pluck('username');
        // User::where('username', '!=', 'admin')->delete();
        $inData = [];
        foreach ($getMe as $value) {
            if ($value['username'] == "admin" || empty($value['username'])) {
                continue;
            }
            User::where('username', $value['username'])->delete();
            $inData[] = [
                'name' => $value['name'],
                'username' => $value['username'],
                'email' => $value['email'],
                'password' => $value['password'],
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        User::insert($inData);
    }
}
