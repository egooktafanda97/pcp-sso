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

        $admin = (new UserManagementServices())->save([
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

        // set role
        (new UserManagementServices())->setRole(User::whereUsername('admin')->first()->id, ['superadmin', 'web']);
        (new UserManagementServices())->setRole(User::whereUsername('egookta')->first()->id, ['user', 'web']);
        // create permission admin
        $permissionId =  (new UserManagementServices())->createPermissions('dashops', 'web');
        (new UserManagementServices())->setRulePermissions(
            roleName: Role::whereName('admin')->first()->name,
            permissionName: $permissionId->name
        );
        $permissionId =  (new UserManagementServices())->createPermissions('isoform', 'web');
        (new UserManagementServices())->setRulePermissions(
            roleName: Role::whereName('admin')->first()->name,
            permissionName: $permissionId->name
        );

        // create permission
        $permissionId =  (new UserManagementServices())->createPermissions('dashops', 'web');
        (new UserManagementServices())->setRulePermissions(
            roleName: Role::whereName('user')->first()->name,
            permissionName: $permissionId->name
        );
        $permissionId =  (new UserManagementServices())->createPermissions('isoform', 'web');
        (new UserManagementServices())->setRulePermissions(
            roleName: Role::whereName('user')->first()->name,
            permissionName: $permissionId->name
        );
    }
}
