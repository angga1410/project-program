<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;

class UserController extends Controller
{
    public function indexName(){
        return Users::all("name");
    }

    public function indexAll(){
        return Users::all();
    }

    public function create(request $request){
        
        $users = new Users;
        $users->name = $request->name;
        $users->email = $request->email;
        $users->password = $request->password;
        $users->role = $request->role;
        $users->save(); 
        return;
    }
}
