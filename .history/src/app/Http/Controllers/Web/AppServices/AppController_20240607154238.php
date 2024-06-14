<?php

namespace App\Http\Controllers\Web\AppServices;

use App\Http\Controllers\Controller;
use App\Service\AppManagementServices;
use App\Service\UserManagementServices;
use App\Utils\Encryption;
use Inertia\Inertia;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;

#[Controllers()]
#[Group(prefix: 'app-services', name: 'app-services', middleware: ['web', 'auth'])]
class AppController extends Controller
{
    public function __construct(
        public AppManagementServices $appManagementServices,
        public UserManagementServices $userManagementServices
    ) {
    }
    #[Get('/')]
    public function index()
    {
        $appServiceData = $this->appManagementServices->getAppService();
        return Inertia::render('home/index', [
            'appServiceData' => $appServiceData
        ]);
    }

    #[Get('/attact/{id}')]
    public function attact($id)
    {
        $appServiceData = $this->appManagementServices->find($id);
        $user = auth()->user();
        $roles = $user->getRoleNames();
        $permissions = $user->getAllPermissions();
        $password = $this->userManagementServices->passwordReaded($user->token);
        $user->password = $password;
        return $user;
        $header = Encryption::Encode(json_encode($user), $appServiceData->token);
        return redirect($appServiceData->url_auth . "?q=" . $header);
    }
}
