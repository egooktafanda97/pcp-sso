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
        return Inertia::render('user-management/roler');
    }
}
