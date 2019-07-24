<?php
use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'admin@admin',
            'name' => 'Admin',
            'role' => 'admin',
            'password' => bcrypt('admin@123')
        ]);

        User::create([
            'email' => 'angga@gspe',
            'name' => 'Angga',
            'role' => 'user',
            'password' => bcrypt('angga@123')
        ]);

        User::create([
            'email' => 'bela@gspe',
            'name' => 'Bela',
            'role' => 'user',
            'password' => bcrypt('bela@123')
        ]);
    }
}
