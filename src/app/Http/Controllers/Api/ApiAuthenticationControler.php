<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Utils\ResponseApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use TaliumAttributes\Collection\Controller\RestController;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Post;

#[RestController()]
#[Group(prefix: 'auth', name: 'auth', middleware: [])]
class ApiAuthenticationControler extends Controller
{

    // loginByApi
    #[Post('/login')]
    public function loginApi(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return ResponseApi::statusValidateError()->error($validator->errors())->json();
        }

        $username = User::where('username', $request->username)->first();
        if (!$username) {
            return ResponseApi::statusQueryError()->error('login gagal, username salah')->data([
                "username" => "username anda salah!"
            ])->json();
        }

        $exp = 1440;
        if ($request->remember_me)
            $exp = $this->expires_in_remember();
        if (!$token = auth()->guard("api")->setTTL($exp)->attempt($validator->validated())) {
            return ResponseApi::statusQueryError()->error('login gagal, password salah')->data([
                "password" => "password anda salah!"
            ])->json();
        }

        Log::channel('activity')->info('user login ' . json_encode($request->all()));
        return $this->respondWithToken($token);
    }

    // create token
    protected function respondWithToken($token)
    {
        $user = auth()->guard("api")
            ->user();
        $roles = $user->getRoleNames(); // Mengambil roles
        $permissions = $user->getAllPermissions(); // Mengambil permissions
        return ResponseApi::statusSuccess()
            ->message("login berhasil.")
            ->data([
                'access_token' => $token,
                'token_type'   => 'bearer',
                'expires_in'   => auth()->guard("api")->factory()->getTTL() * 60,
                "users"        => collect($user)->except(["password", "token"])->toArray()
            ])->json();
    }
}
