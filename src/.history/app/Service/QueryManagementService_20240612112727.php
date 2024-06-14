<?php

namespace App\Service;

use App\Utils\Encryption;

class QueryManagementService
{
    private $key = env('APP_KEY');

    public function __construct()
    {
    }

    public function query($request)
    {
        $key = env('APP_KEY');
        dd($request->all(), Encryption::Encode($request->header('enpoint'), $key), $request->header('action'));
    }
}
