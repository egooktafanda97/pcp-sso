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

    // set rules
    #[Get("set-rules/{id}")]
    public function setRules($id)
    {
        return Inertia::render('user-management/set-rules');
    }

    #[Get('/create')]
    public function create()
    {
        $getAllRole = $this->userManagementServices->showRole();
        return Inertia::render('user-management/store', [
            'roles' => $getAllRole
        ]);
    }

    // show json user
    #[Get('show/json')]
    public function show()
    {
        return response()->json($this->userManagementServices->show(), 200);
    }


    #[Post('')]
    public function store(Request $request)
    {
        try {
            $x = $this->userManagementServices->save($request->all());
            return response()->json(['message' => 'User created successfully', "data" => $x], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
}
