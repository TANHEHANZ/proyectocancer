<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as pdf; // Importar la clase PDF correctamente
use App\Models\Pacientes;
use Barryvdh\DomPDF\Facade\Pdf as FacadePdf;
use Illuminate\Support\Facades\DB;

class ConsultasController extends Controller
{
    public function generar(Request $request)
    {
        $campos = $request->input('campos');

        $pacientes = Pacientes::all();

        $data = [];
        foreach ($pacientes as $paciente) {
            $item = [];
            foreach ($campos as $campo) {
                $item[$campo] = $paciente->$campo;
            }
            $data[] = $item;
        }

        $pdf = FacadePdf::loadView('reporte', ['campos' => $campos, 'data' => $data]);

        return $pdf->stream('reporte.pdf');
    }

}
