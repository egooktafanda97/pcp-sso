<?php

namespace App\Service;

use App\Models\AppServices;
use App\Models\User;

class AppManagementServices
{
    public function __construct()
    {
        // 
    }

    public function getAppService()
    {
        $user = User::find(auth()->user()->id);
        $permissions = $user->getAllPermissions()->pluck('name');
        dd($permissions);
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
}
