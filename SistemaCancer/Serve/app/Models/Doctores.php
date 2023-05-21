<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctores extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'ap_paterno',
        'ap_materno',
        'ci',
        'correo',
        'Direccion',
        'Credenciales',
        'descripcion',
        'id_centros',
        'id_especialidades'
    ];
}
