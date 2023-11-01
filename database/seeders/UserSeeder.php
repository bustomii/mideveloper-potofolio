<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Bustomi',
                'email' => 'bustomi@mideveloper.tech',
                'password' => '12345678',
                'role' => [
                    'Super Admin',
                    'Admin',
                ],
                'status' => 1,
            ],
        ];
        
        foreach($users as $user) {
            $created_user = User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => bcrypt($user['password']),
                'status' => $user['status'],
            ]);

            foreach($user['role'] as $role) {
                $created_user->assignRole($role);
            }

        }
    }
}
