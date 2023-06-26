<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posttratamiento extends Model
{
    use HasFactory;
    protected $fillable=[
        'titulo',
        'descripcion',
        'contenido',
        'fecha_publicar',
    ];
}
