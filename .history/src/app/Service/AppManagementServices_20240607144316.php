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
        return [
            "name" => "App Service",
            "description" => "This is app service"
        ];
    }
}
