<?php

namespace App\Http\Controllers\Web\AppServices;

use App\Http\Controllers\Controller;
use TaliumAttributes\Collection\Controller\Controllers;
use TaliumAttributes\Collection\Rutes\Get;
use TaliumAttributes\Collection\Rutes\Group;

#[Controllers()]
#[Group(prefix: 'root', name: 'root', middleware: [])]
class AppController extends Controller
{
    #[Get('/q')]
    public function query()
    {
    }
}
