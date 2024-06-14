<?php

namespace App\Http\Controllers\Web\AppServices;

use App\Http\Controllers\Controller;
use App\Service\AppManagementServices;
use Inertia\Inertia;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;

#[Controllers()]
#[Group(prefix: 'app-services', name: 'app-services', middleware: ['web', 'auth'])]
class AppController extends Controller
{
    public function __construct(
        public AppManagementServices $appManagementServices
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
        // dd();
    }
}
