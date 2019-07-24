<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\Milestone;

class MilestoneController extends Controller
{
    public function index(){
        return Milestone::all();
    }

    public function indexid($id){
        return Milestone::find($id);
    }
    public function getProject($project_id){
        return Milestone::where("project_id",$project_id)->get();
    }

    public function create(request $request){
        
        $milestone = new Milestone;
        $milestone->portfolio_id = $request->portfolio_id;
        $milestone->project_id = $request->project_id;
        $milestone->name = $request->name;
        $milestone->priority = $request->priority;
        $milestone->status = $request->status;
        $milestone->start_at = $request->start_at;
        $milestone->target_date = $request->target_date;
        $milestone->deadline = $request->deadline;
        $milestone->save(); 
        return;
    }

    public function delete($id)
    {
      $milestone = Milestone::find($id);

      $milestone->delete();

      return response()->json('successfully deleted');
    }
}
