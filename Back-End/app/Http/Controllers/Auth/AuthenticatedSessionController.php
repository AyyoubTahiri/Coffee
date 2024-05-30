<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Sanctum\HasApiTokens;
class AuthenticatedSessionController extends Controller
{

    public function store(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        // Attempt to log in the user using the Auth facade
        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            // Generate new token
            $token = $user->createToken('DIY_Token')->plainTextToken;
            // $request->session()->regenerate();

            return response()->json([
                'user' => $user,
                'token' => $token,
            ]);
        }

        // If authentication fails, return error response
        return response()->json(['error' => 'The provided credentials do not match our records.'], 401);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
