<?php

namespace App\Http\Controllers;

use function GuzzleHttp\Psr7\copy_to_string;
use http\Env\Response;
use Illuminate\Http\Request;
use App\User;
use Hash;
use JWTAuth;

use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;
use Illuminate\Support\Facades\Validator;





class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }


        $user = User::create([
            'name' => $request->json()->get('name'),
            'email' => $request->json()->get('email'),
            'password' => Hash::make($request->json()->get('password')),

        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user', 'token'), 201);


    }


    public function login(Request $request) {
        //print_r($request->json()->all());
        $credentials = $request->json()->all();



        try {
            if(!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }

        }
        catch(JWTException $e) {
            return $e;
            //return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));

    }

    /*
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));
    }
    */


    public function getAuthenticatedUser() {
        try {
            if(! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
            }
            catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
                    return response()->json(['token_expired'], $e->getStatusCode());
            }
            catch(Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
                return response()->json(['token_invalid'], $e->getStatusCode());
            }
            catch(Tymon\JWTAuth\Exceptions\JWTException $e) {
                return response()->json(['token_absse'], $e->getStatusCode());
            }

            return response()->json(compact('user'));
        }





}
