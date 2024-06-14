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
                "url_auth" => "https://dashops.pcpexpress.com/attact-login",
                "token" => 'base64:+uL55UpjqnY3YboN7+EAb/Asu7uIA5EHocyO9jKZzEs=',
                "code" => "dashops",
                "permission_name" => "dashops"
            ],
            [
                "name" => "IsoFOrm",
                "thumbnail" => "/img/items/dashops.png",
                "description" => "File IsoForm",
                "url" => "http://localhost:8081/",
                "url_auth" => "http://localhost:8081/attact-login",
                "token" => 'PKIq1gr6XGSxW6sYdRosM7Qf9gcMQF3tbQcJb11z8qhUBESOzcpy6Z510xaHZDWa',
                "code" => "isoform",
                "permission_name" => "isoform"
            ],
        ];

        foreach ($data as $item) {
            \App\Models\AppServices::create($item);
        }
    }
}
