<?php

namespace App\Http\Controllers\Api;

use App\Helpers\helper;
use App\Http\Controllers\Controller;
use App\Models\AppServices;
use App\Service\AppManagementServices;
use App\Service\Artikel\ArtikelService;
use App\Service\UserManagementServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Controller\RestController;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Middleware;
use TaliumAttributes\Collection\Rutes\Name;
use TaliumAttributes\Collection\Rutes\Post;

#[RestController()]
#[Group(prefix: 'me-auth', name: 'me.auth', middleware: ['auth'])]
class ArtikelController extends Controller
{
    public function __construct(
        public AppManagementServices $appManagementServices,
        public UserManagementServices $userManagementServices
    ) {
    }
    #[Post("/zone")]
    public function zoneAuth(Request $request)
    {
        try {
            // username and password
            $validator = Validator::make($request->all(), [
                'username' => 'required',
                'password' => 'required'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()
                ], 400);
            }
            $username = $request->username;
            $password = $request->password;
            $user = $this->userManagementServices->login($username, $password);

            $appServiceData = $this->appManagementServices->findByToken($request->appToken);
            $user = auth()->user();
            $roles = $user->getRoleNames();
            $permissions = $user->getAllPermissions();
            $password = $this->userManagementServices->passwordReaded($user->token);
            $user->passwords = $password;

            $token = Encryption::Encode(json_encode($user), $appServiceData->token);
            return response()->json([
                'token' => $token
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
