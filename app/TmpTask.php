<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TmpTask extends Model
{
  
    protected $table = "tmp_task";
    protected $fillable = [
      'name',
      'template_id'
    ];
   
    public function setUpdatedAt($value)

    {

      return NULL;

    }


    public function setCreatedAt($value)

    {

      return NULL;

    }
}
