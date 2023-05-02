<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enfermera extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'ap_paterno',
        'ap_materno',
        'ci',
    ];
}
