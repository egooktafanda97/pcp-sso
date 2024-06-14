<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Service\QueryManagementService;
use App\Utils\Encryption;
use GuzzleHttp\Psr7\Query;
use Illuminate\Http\Request;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Post;

#[Controllers()]
#[Group(prefix: 'root', name: 'root', middleware: ["web"])]
class RootController extends Controller
{
    public function __construct(
        public QueryManagementService $queryManagementService
    ) {
    }


    #[Post('/q')]
    public function query(Request $request)
    {
        $key = env('APP_KEY');
        dd($request->all(), Encryption::Encode($request->header('enpoint'), $key), $request->header('action'));
    }
}
