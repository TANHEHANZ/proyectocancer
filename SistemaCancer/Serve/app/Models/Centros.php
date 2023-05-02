<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Centros extends Model
{
    use HasFactory;
     protected $fillable = [
        'nombre',
        'ubicacion',
        'id_municipios',
    ];
}
