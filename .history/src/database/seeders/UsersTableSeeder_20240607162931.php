<?php

namespace Database\Seeders;

use App\Models\User;
use App\Service\UserManagementServices;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'superadmin',
            'username' => 'admin',
            'email' => 'ego@example.com',
            'password' => Hash::make('password@pcp'),
        ]);

        $users = (new UserManagementServices())->save([
            'name' => 'ego',
            'username' => 'egookta',
            'email' => 'egooktafanda@pcpexpress.com',
            'password' => 'password@pcp',
        ]);

        // create role
        (new UserManagementServices())->createRole('superadmin');
        (new UserManagementServices())->createRole('admin');
        (new UserManagementServices())->createRole('user');
        (new UserManagementServices())->createRole('dashops');

        // set role
        (new UserManagementServices())->setRole(User::whereUsername('egookta')->first()->id, ['user', 'web']);

        // create permission
        $permissionId =  (new UserManagementServices())->createPermissions('dashops', 'web');
        $permissionId =  (new UserManagementServices())->createPermissions('isoform', 'web');

        (new UserManagementServices())->setPermissionRole(
            role: Role::whereName('user')->first()->name,
            permissionId: [$permissionId->name]
        );

        (new UserManagementServices())->setPermissionRole(
            role: Role::whereName('user')->first()->name,
            permissionId: [$permissionId->name]
        );
    }
}
