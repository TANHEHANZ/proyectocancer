<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Derivaciones extends Model
{
    use HasFactory;
    protected $fillable=[
'id_pacientes',
'id_doctores',
'id_tratamientos',
'id_centros',
'id_resultados',
'fecha_inicio',
'fecha_fin',

    ];
}
