<?php

namespace App\Http\Controllers\Web\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeControler extends Controller
{
    public function index()
    {
        return Inertia::render('home/index');
    }
}
