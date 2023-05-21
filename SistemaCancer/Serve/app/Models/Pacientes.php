<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pacientes extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'ap_paterno',
        'ap_materno',
        'sexo',
        'fecha_nacimiento',
        'telefono',
        'ci',
        'direccion',
        'correo',
        'edad',
        'id_doctores',
        'id_enfermeras',
    ];
}
