<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Milestone;
use App\Task;

class TaskController extends Controller
{
    public function index(){
        return Task::all();
    }

    public function indexid($id){
        return Task::find($id);
    }
    public function getMilestone($milestone_id){
        return Task::where("milestone_id",$milestone_id)->get();
    }

    public function create(request $request){
        
        $task = new task;
        $task->milestone_id = $request->project_id;
        $task->portfolio_id = $request->portfolio_id;
        $task->name = $request->name;
        $task->employee_id = $request->employee_id;
        $task->priority = $request->priority;
        $task->status = $request->status;
        $task->start_at = $request->start_at;
        $task->target_date = $request->target_date;
        $task->deadline = $request->deadline;
        $task->save(); 
        return;
    }

    public function delete($id)
    {
      $task = Task::find($id);

      $task->delete();

      return response()->json('successfully deleted');
    }
}
