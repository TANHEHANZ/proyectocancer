<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seguimientos extends Model
{

    use HasFactory;
    protected $fillable = [
        'id_muestras',
        'id_resultados',
        'id_doctores',
        'id_centros',
        'fecha',
        'observaciones',
    ];
}
