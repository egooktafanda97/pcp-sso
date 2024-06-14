<?php

namespace App\Http\Controllers\Web\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Post;

#[Controllers()]
#[Group(
    prefix: "user-management",
    name: "user",
    middleware: ["auth"]
)]
class UserController extends Controller
{
    #[Get('/')]
    public function index()
    {
        return Inertia::render('user-management/index');
    }

    #[Post('')]
    public function store(Request $request)
    {
        dd($request->all());
    }
}
