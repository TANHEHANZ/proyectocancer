<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Muestras extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_pacientes',
        'id_centros',
        'id_tiposcancers',
        'id_enfermeras',
        'fecha',
    ];
}
