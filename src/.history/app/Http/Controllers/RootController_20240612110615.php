<?php

namespace App\Http\Controllers\Web\AppServices;

use App\Http\Controllers\Controller;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Group;

#[Controllers()]
#[Group(prefix: 'app-services', name: 'app-services', middleware: ['web', 'auth'])]
class AppController extends Controller
{
}
