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

    // create
    public function store()
    {
        $data = request()->all();
        $data['token'] = md5($data['name'] . $data['url_auth']);
        AppServices::create($data);
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
}
