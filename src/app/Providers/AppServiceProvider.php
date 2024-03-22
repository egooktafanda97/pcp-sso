<?php

namespace App\Providers;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Laravel\Passport\Passport;

class AppServiceProvider extends \Illuminate\Foundation\Support\Providers\AuthServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
        Passport::ignoreRoutes();
        // Passport::tokensExpireIn(now()->addDays(15));
        // Passport::refreshTokensExpireIn(now()->addDays(30));
        // Passport::personalAccessTokensExpireIn(now()->addMonths(6));
        // Inertia::share([
        //     'errors' => function () {
        //         return Session::get('errors')
        //             ? Session::get('errors')->getBag('default')->getMessages()
        //             : (object) [];
        //     }
        // ]);
    }
}
