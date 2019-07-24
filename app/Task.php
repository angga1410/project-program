<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  
    protected $table = "Task";
    public function setUpdatedAt($value)

    {

      return NULL;

    }


    public function setCreatedAt($value)

    {

      return NULL;

    }
   
}
