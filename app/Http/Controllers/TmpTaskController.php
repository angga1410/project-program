<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TmpTask;


class TmpTaskController extends Controller
{

    public function createTmp(request $request)
    {  
        $tmpTask = new TmpTask;
        $tmpTask->template = $request->template;
        $tmpTask->save(); 
        return;
    }

    public function index()
    {
        return TmpTask::get()->last();
    }
}