<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role_super_admin = Role::create(['name' => 'Super Admin']);
        $role_admin = Role::create(['name' => 'Admin']);

        $permission_read = Permission::create(['name' => 'read']);
        $permission_edit = Permission::create(['name' => 'edit']);
        $permission_write = Permission::create(['name' => 'write']);
        $permission_delete = Permission::create(['name' => 'delete']);

        $permissions_super_admin = [$permission_read, $permission_edit, $permission_write, $permission_delete];
        $permissions_admin = [$permission_read, $permission_edit, $permission_write, $permission_delete];

        $role_super_admin->syncPermissions($permissions_super_admin);
        $role_admin->syncPermissions($permissions_admin);
    }
}
