<?php

use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



// Route::get('/', function () {
//     return Inertia::render('Home');
// })->name('home');
// Route::get('/about', function () {
//     return Inertia::render('About');
// })->name('about');
// Route::get('/contact', function () {
//     return Inertia::render('Contact');
// })->name('contact');
// Route::get('/services', function () {
//     return Inertia::render('Services');
// })->name('services');
// Route::get('/case-study', function () {
//     return Inertia::render('CaseStudy');
// })->name('case-study');


// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::controller(PagesController::class)->group(function () {
    Route::get('/', 'index')->name('home');
    Route::get('/about', 'about')->name('about');
    Route::get('/contact', 'contact')->name('contact');
    Route::get('/services', 'services')->name('services');
    Route::get('/case-study', 'caseStudy')->name('caseStudy');
    Route::get('/welcome', 'welcome')->name('welcome');
});

Route::post('/contact', [ContactMessageController::class, 'store'])->name('contact.store');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
