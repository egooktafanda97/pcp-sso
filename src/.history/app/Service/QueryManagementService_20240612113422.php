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
        return  Encryption::Decode($crypt, env('APP_KEY')y);
    }



    public function query($request)
    {
        dd($this->read_table($request['enpoint']));
    }
}
