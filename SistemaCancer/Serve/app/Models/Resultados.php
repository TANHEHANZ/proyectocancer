<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultados extends Model
{
    use HasFactory;
    protected $fillable = [
        'resultados',
        'id_pacientes',
        'id_tiposcancers',
        'id_muestras',
        'id_laboratorios',
        'fecha',
    ];
}
