<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tratamiento extends Model
{
    use HasFactory;
    protected $fillable=[
        'id_pacientes',
        'id_doctores',
        'id_tipotratamientos',
        'fecha_inicio',
        'fecha_fin',
        'observaciones',
        'estadotratamiento',
    ];
}
