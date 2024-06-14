<?php

namespace App\Service;

use App\Utils\Encryption;

class QueryManagementService
{
    private $key;
    public function __construct()
    {
        $this->key = env('APP_KEY');
    }

    public function read_table($crypt)
    {
        return  Encryption::Decode($crypt, $this->key);
    }



    public function query($request)
    {
        dd($request->all(), Encryption::Decode($request['enpoint'], $this->key), $request->header('action'));
    }
}
