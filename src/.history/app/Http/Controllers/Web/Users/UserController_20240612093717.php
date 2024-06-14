<?php

namespace App\Http\Controllers\Web\Users;

use App\Http\Controllers\Controller;
use App\Service\UserManagementServices;
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
    public function __construct(
        public UserManagementServices $userManagementServices
    ) {
    }

    #[Get('/')]
    public function index()
    {
        return Inertia::render('user-management/index');
    }

    #[Post('')]
    public function store(Request $request)
    {
        try {
            $this->userManagementServices->save($request->all());
            return Inertia::location(route('user.index'));
        } catch (\Throwable $th) {
            return to_route('user.index')->with("errors", $th->getMessage());
        }
    }
}
