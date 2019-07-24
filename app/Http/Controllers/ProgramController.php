<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Program;

class ProgramController extends Controller
{
    public function index(){
        return Program::all();
    }

    public function indexid($id){
        return Program::find($id);
    }
    public function getPortfolio($portfolio_id){
        return Program::where("portfolio_id",$portfolio_id)->get();
    }

    public function create(request $request){
        
        $program = new Program;
        $program->portfolio_id = $request->portfolio_id;
        $program->name = $request->name;
        $program->priority = $request->priority;
        $program->status = $request->status;
        $program->start_at = $request->start_at;
        $program->target_date = $request->target_date;
        $program->deadline = $request->deadline;
        $program->save(); 
        return;
    }

    public function delete($id)
    {
      $program = Program::find($id);

      $program->delete();

      return response()->json('successfully deleted');
    }
}
