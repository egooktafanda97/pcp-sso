<?php

namespace App\Service;

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
        $app = AppServices::whereIn("permission_name", $permissions)->get();
        return $app;
    }
}
