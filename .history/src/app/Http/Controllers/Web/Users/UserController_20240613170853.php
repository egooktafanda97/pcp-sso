<?php

namespace App\Http\Controllers\Web\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
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

    // usr getId
    #[Get('/usr/{id}')]
    public function indexUser($id = null)
    {
        return $this->userManagementServices->getId($id);
    }

    // set rules
    #[Get("set-rules/{id}")]
    public function setRules($id)
    {
        return Inertia::render('user-management/set-rules');
    }

    #[Get('/create/{id?}')]
    public function create($id = null)
    {
        $getAllRole = $this->userManagementServices->showRole();
        return Inertia::render('user-management/store', [
            'roles' => $getAllRole,
            'id' => $id
        ]);
    }

    // show json user
    #[Get('show/json')]
    public function show()
    {
        return response()->json($this->userManagementServices->show(), 200);
    }
    // user deleta
    #[Get('/{id}/destory')]
    public function delete($id)
    {
        try {
            User::whereId($id)->delete();
            return response()->json(['message' => 'User deleted successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
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
    // update
    #[Post('/{id}')]
    public function update(Request $request, $id)
    {
        try {
            $x = $this->userManagementServices->update($id, $request->all());
            return response()->json(['message' => 'User updated successfully', "data" => $x], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
}
