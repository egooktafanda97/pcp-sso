<?php

namespace App\Http\Controllers\Web\Users;

use App\Http\Controllers\Controller;
use App\Service\UserManagementServices;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;
use TaliumAttributes\Collection\Rutes\Post;

#[Controllers()]
#[Group(
    prefix: "role-management",
    name: "role.management",
    middleware: ["auth"]
)]
class RoleManagementController extends Controller
{
    public function __construct(
        public UserManagementServices $userManagementServices
    ) {
    }

    // get page role
    #[Get('/')]
    public function index()
    {
        $rolePermission = $this->userManagementServices->getRolePermissionShow();
        return Inertia::render('user-management/roler');
    }

    // show all role
    #[Get('show/json')]
    public function show()
    {
        return response()->json($this->userManagementServices->showRole(), 200);
    }

    // show json user
    #[Get('permission/show/json')]
    public function permissionShow()
    {
        return response()->json($this->userManagementServices->permissionShow(), 200);
    }

    // show json user
    #[Get('permission/role/{id}/json')]
    public function permissionShowId($id = null)
    {
        return response()->json($this->userManagementServices->getRolePermissionShowId($id), 200);
    }

    // set rules 
    #[Post("permission/store/{id}")]
    public function permissionStore(Request $request, $id)
    {
        dd($request->all());
        try {
            $x = $this->userManagementServices->setPermissionRole($request->role, $request->permission);
            return response()->json(['message' => 'User created successfully', "data" => $x], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    // set rules
    #[Post("store")]
    public function store(Request $request)
    {
        try {
            $x = $this->userManagementServices->createRole($request->name);
            return response()->json(['message' => 'User created successfully', "data" => $x], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    // destroy role4
    #[Post("destroy/{id}")]
    public function destroy($id)
    {
        try {
            $x = $this->userManagementServices->destroyRole($id);
            return response()->json(['message' => 'User created successfully', "data" => $x], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
}
