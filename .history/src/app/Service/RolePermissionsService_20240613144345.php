<?php

namespace App\Service;

use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionsService
{

    public function create(string $name)
    {
        return Role::create(['name' => $name]);
    }

    public function createPermissions(string $name, ?string $guard_name = null)
    {
        return Permission::create(['name' => $name, 'guard_name' => $guard_name ?? "web"]);
    }

    public function setRulePermissions($roleName, $permissionName)
    {
        $role = Role::findByName($roleName);
        $permission = Permission::findByName($permissionName);
        $role->givePermissionTo($permission);
        return $role;
    }

    public function setRulePermissionsArray(string $roleName, array $permissionName)
    {
        $role = Role::findByName($roleName);
        foreach ($permissionName as $permission) {
            $permission = Permission::findByName($permission);
            $role->givePermissionTo($permission);
        }
        return $role;
    }

    public function setUserRole($user, $roleName)
    {
        $user = User::find($user);
        $user->assignRole($roleName);
        return $user;
    }

    public function newRole($name, $guard_name)
    {
        $response = Role::firstOrCreate(['guard_name' => $guard_name, 'name' => $name]);
        return $response;
    }
    public function setPermissions($role, $permissions)
    {
        $role->givePermissionTo($permissions);
    }

    public function createRole($models, $role)
    {
        $models->assignRole($role);
    }

    // permissionShow
    public function permissionShow()
    {
        return Permission::all();
    }

    // getRolePermissionShow
    public function getRolePermissionShow()
    {
        $roles = Role::with('permissions')
            ->whereNotIn('name', ['superadmin'])
            ->get();
        return $roles->map(function ($role) {
            return [
                'name' => $role->name,
                'permissions' => $role->permissions->map(function ($permission) {
                    return [
                        'name' => $permission->name,
                    ];
                }),
            ];
        });
    }

    /**
     * Add permissions to a role
     *
     * @param string $roleName
     * @param array $permissions
     * @return void
     */
    public function addPermissionsToRole(string $roleName, array $permissions)
    {
        $role = Role::findByName($roleName);

        foreach ($permissions as $permissionName) {
            $permission = Permission::firstOrCreate(['name' => $permissionName]);
            $role->givePermissionTo($permission);
        }
    }

    /**
     * Remove permissions from a role
     *
     * @param string $roleName
     * @param array $permissions
     * @return void
     */
    public function removePermissionsFromRole(string $roleName, array $permissions)
    {
        $role = Role::findByName($roleName);

        foreach ($permissions as $permissionName) {
            $permission = Permission::findByName($permissionName);
            $role->revokePermissionTo($permission);
        }
    }

    public function setRole($users, array $role)
    {
        if (!$roler = $this->newRole($role[0], ($role[1] ?? 'web')))
            return ["error" => "role  could not be created"];
        $this->createRole($users, $roler);
    }
}
