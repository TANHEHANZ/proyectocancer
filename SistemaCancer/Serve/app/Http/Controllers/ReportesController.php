<?php

namespace App\Http\Controllers;

use App\Models\Centros;
use App\Models\Doctores;
use App\Models\Pacientes;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class ReportesController extends Controller
{


    public function reporteCenPac()
    {
        return DB::select(' SELECT p.nombre AS nombre_paciente, c.ubicacion AS centro, d.nombre AS nombre_doctor FROM pacientes p INNER JOIN doctores d ON p.id = d.id INNER JOIN centros c ON d.id = c.id;
        ');
    }
}
