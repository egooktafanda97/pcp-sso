<?php

namespace App\Service;

use App\Utils\Encryption;

class QueryManagementService
{
    private $key;

    public function read_table($request)
    {
        $key = env
    }

    public function __construct()
    {
        $this->key = env('APP_KEY');
    }

    public function query($request)
    {
        $key = env('APP_KEY');
        dd($request->all(), Encryption::Encode($request->header('enpoint'), $key), $request->header('action'));
    }
}
