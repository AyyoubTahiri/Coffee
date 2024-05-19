<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make('password'), // Default password for all seeded users
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Set the user's password.
     *
     * @param string $password
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function password(string $password)
    {
        return $this->state(function (array $attributes) use ($password) {
            return [
                'password' => Hash::make($password),
            ];
        });
    }
}

