<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Portfolio;

class PortfolioController extends Controller
{
    public function index(){
        return Portfolio::all();
    }

    public function indexid($id){
        return Portfolio::find($id);
    }

    public function create(request $request){
        
        $portfolio = new Portfolio;
        $portfolio->name = $request->name;
        $portfolio->status = $request->status;
        $portfolio->manager_id = $request->manager_id;
        $portfolio->employee_id = $request->employee_id;
        $portfolio->priority = $request->priority;
        $portfolio->target_date = $request->target_date;
        $portfolio->start_at = $request->start_at;
        $portfolio->deadline = $request->deadline;
        $portfolio->save(); 
        return;
    }

    public function delete($id)
    {
      $portfolio = Portfolio::find($id);

      $portfolio->delete();

      return response()->json('successfully deleted');
    }
}
