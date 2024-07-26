<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class PagesController extends Controller
{

    public function welcome(Request $request): InertiaResponse
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
    public function index(Request $request): InertiaResponse
    {
        return Inertia::render('Index');
    }

    public function about(Request $request): InertiaResponse
    {
        return Inertia::render('About');
    }

    public function contact(Request $request): InertiaResponse
    {
        return Inertia::render('Contact');
    }

    public function services(Request $request): InertiaResponse
    {
        return Inertia::render('Services');
    }

    public function caseStudy(Request $request): InertiaResponse
    {
        return Inertia::render('CaseStudy');
    }
}
