<?php

namespace App\Http\Controllers\Web\AppServices;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Post;

#[Controllers()]
#[Group(prefix: 'root', name: 'root', middleware: ["web"])]
class AppController extends Controller
{
    #[Post('/q')]
    public function query(Request $request)
    {
        dd($request->all(), $request->header('enpoint'));
    }
}
