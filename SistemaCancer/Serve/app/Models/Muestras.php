<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Muestras extends Model
{
    use HasFactory;
    protected $fillable = [

        'id_pacientes',
        'descripcion',
        'fecha',
        'id_tipomuestras',
        'id_enfermeras',
    ];
}
