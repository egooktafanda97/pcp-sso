<?php

namespace App\Http\Controllers\Web\AppServices;

use App\Http\Controllers\Controller;
use App\Service\UserManagementServices;
use Inertia\Inertia;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;

#[Controllers()]
#[Group(prefix: 'app-services', name: 'app-services', middleware: ['web', 'auth'])]
class AppController extends Controller
{
    public function __construct(
        public UserManagementServices $userManagementServices
    ) {
    }
    #[Get('/')]
    public function index()
    {
        $appServiceData = $this->userManagementServices->getAppService();
        return Inertia::render('home/index', [
            'appServiceData' => $appServiceData
        ]);
    }
}
