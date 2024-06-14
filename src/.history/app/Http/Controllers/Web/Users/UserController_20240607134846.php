<?php

namespace App\Http\Controllers\Web\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;

#[Controllers()]
#[Group(
    prefix: "usr",
    name: "user",
    middleware: ["auth"]
)]
class UserController extends Controller
{
    #[Get('/')]
    public function index()
    {
        dd("ok");
    }
}
