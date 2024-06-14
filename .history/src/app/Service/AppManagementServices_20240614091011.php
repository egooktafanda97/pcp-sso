<?php

namespace App\Service;

use App\Models\AppServices;
use App\Models\User;
use App\Utils\Encryption;

class AppManagementServices
{
    public function __construct()
    {
        // 
    }

    // create
    public function store()
    {
        $data = request()->all();
        AppServices::create($data);
    }
    // find all
    public function findAll()
    {
        return AppServices::all();
    }

    public function getAppService()
    {
        $user = User::find(auth()->user()->id);
        $permissions = $user->getAllPermissions()->pluck('name');
        $app = AppServices::whereIn("permission_name", $permissions)->get();
        return $app;
    }

    //find
    public function find($id)
    {
        $user = User::find(auth()->user()->id);
        $app =  AppServices::find($id);
        // permission user with app
        if ($user->hasPermissionTo($app->permission_name)) {
            return $app;
        }
        return null;
    }

    public function findByToken($token)
    {

        $user = User::find(auth()->user()->id);
        $app =  AppServices::whereToken($token);
        // get permission in role 
        $permissions = $user->getAllPermissions()->pluck('name');
        dd($permissions);
        // permission user with app
        if ($user->hasPermissionTo($app->permission_name)) {
            return $app;
        }
        return null;
    }
}
