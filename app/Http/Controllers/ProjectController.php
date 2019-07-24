<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\Program;

class ProjectController extends Controller
{
    public function index(){
        return Project::all();
    }

    public function indexid($id){
        return Project::find($id);
    }
    public function getProgram($program_id){
        return Project::where("program_id",$program_id)->get();
    }

    public function create(request $request){
        
        $project = new Project;
        $project->program_id = $request->program_id;
        $project->name = $request->name;
        $project->priority = $request->priority;
        $project->status = $request->status;
        $project->start_at = $request->start_at;
        $project->target_date = $request->target_date;
        $project->deadline = $request->deadline;
        $project->save(); 
        return;
    }

    public function delete($id)
    {
      $project = Project::find($id);

      $project->delete();

      return response()->json('successfully deleted');
    }
}
