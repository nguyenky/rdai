<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\AppBaseController;
use App\Repositories\UserRepository;
class LoginController extends AppBaseController
{
    protected $repository;
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }
    public function login(Request $request){
        $credentials = $request->only(['email', 'password']);
        if(auth()->attempt($credentials))
        {
            $user = \Auth::user();

            return $this->sendResponse($user->toArray(), 'Login Successfully');
        }else{
            return $this->sendError('Login Failed! Email or password incorrect.');
        }
    }
}
