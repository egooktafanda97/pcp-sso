<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Utils\Encryption;
use Illuminate\Http\Request;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Post;

#[Controllers()]
#[Group(prefix: 'root', name: 'root', middleware: ["web"])]
class RootController extends Controller
{
    #[Post('/q')]
    public function query(Request $request)
    {
        dd($request->all(), Encryption::Encode($request->header('enpoint')), $request->header('action'));
    }
}
