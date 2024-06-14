<?php

namespace App\Http\Controllers\Api;

use App\Helpers\helper;
use App\Http\Controllers\Controller;
use App\Service\Artikel\ArtikelService;
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
    #[Post("/zone")]
    public function zoneAuth(Request $request)
    {
        try {
            $appServiceData = $this->appManagementServices->find($id);
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
            //throw $th;
        }
    }
}
