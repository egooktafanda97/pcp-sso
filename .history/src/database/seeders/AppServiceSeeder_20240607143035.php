<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AppServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "name" => "DashOps",
                "thumbnail" => "/img/items/dashops.png",
                "description" => "Dashboard Operations",
                "url" => "https://dashops.pcpexpress.com/",
                "url_auth" => "https://dashops.pcpexpress.com/inject-sso",
                "token" => Hash::make('dashops@pcp'),
                "code" => "dashops",
                "permission_name" => "dashops"
            ],
        ];

        foreach ($data as $item) {
            \App\Models\AppServices::create($item);
        }
    }
}
