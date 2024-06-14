<?php

namespace App\Service;

use App\Models\AppServices;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use Spatie\Permission\Models\Role;

class UserManagementServices
{
    public function __construct()
    {
        // 
    }

    public function save(array $data)
    {
        // user create
        try {
            $validator = Validator::make($data, [
                "name" => "required",
                "username" => "required|unique:users",
                "email" => "required|email",
                "password" => "required",
            ]);
            if ($validator->fails()) {
                throw new \Exception($validator->errors()->first());
            }
            // hash password
            $data["token"] = base64_encode(Crypt::encrypt(["username" => $data["username"], "password" => $data["password"]]));
            $data["password"] = bcrypt($data["password"]);
            $user = User::create($data);

            return [
                "status" => true,
                "message" => "User created",
                "data" => $user
            ];
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    public function passwordReaded($token, $key = null)
    {
        $data = Crypt::decrypt(base64_decode($token));
        return $data;
    }

    public function setRole(int $usersId, $role)
    {
        $users = User::find($usersId);
        (new RolePermissionsService())->setRole($users, $role);
    }

    public function removeRoleUsers($userId, $roleName)
    {
        $users = User::find($userId);
        // (new RolePermissionsService())->removeRoleUsers($users, $roleName);
    }

    public function createRole(string $name)
    {
        (new RolePermissionsService())->create($name);
    }

    public function createPermissions(string $permission, ?string $guard = null)
    {
        return (new RolePermissionsService())->createPermissions($permission, $guard);
    }

    public function setPermissionRole(string $role, array $permissionId)
    {
        (new RolePermissionsService())->setRulePermissionsArray($role, $permissionId);
    }

    // setRulePermissions
    public function setRulePermissions($roleName, $permissionName)
    {
        (new RolePermissionsService())->setRulePermissions($roleName, $permissionName);
    }

    // update user and password
    public function update($id, array $data)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                return [
                    "status" => false,
                    "message" => "User not found"
                ];
            }
            if (!empty($data["password"])) {
                $data["password"] = bcrypt($data["password"]);
                $data["token"] = base64_encode(Crypt::encrypt(["username" => $data["username"], "password" => $data["password"]]));
            }
            $user->update($data);
            return [
                "status" => true,
                "message" => "User updated",
                "data" => $user
            ];
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    // user show
    public function show()
    {
        return User::all();
    }
}
