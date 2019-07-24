<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TmpMilestone;


class TmpMilestoneController extends Controller
{

    public function createTmp(request $request)
    {
        $tmpMilestone = new TmpMilestone;
        $tmpMilestone->name = $request->name;
      
        $tmpMilestone->save(); 
        return;
    }

    public function index()
    {
        return TmpMilestone::all();
    }
}