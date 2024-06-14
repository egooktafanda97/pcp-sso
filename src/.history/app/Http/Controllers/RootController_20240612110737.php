<?php

namespace App\Http\Controllers\Web\AppServices;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;

#[Controllers()]
#[Group(prefix: 'root', name: 'root', middleware: [])]
class AppController extends Controller
{
    #[Get('/q/{query}')]
    public function query(Request $request, $query)
    {
        return response()->json([
            'query' => $query,
            'data' => $request->all()
        ]);
    }
}
