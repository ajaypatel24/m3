<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organisation extends Model
{

    public function contacts() {
        return $this->hasMany('App\Contact');
    }
}
