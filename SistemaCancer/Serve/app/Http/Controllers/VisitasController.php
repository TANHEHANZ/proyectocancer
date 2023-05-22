<?php

namespace App\Http\Controllers;

use App\Models\Visitas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VisitasController extends Controller

{
    public function index()
    {
        $vistas = DB::select("SELECT p.nombre as nombre_paciente, v.fecha, v.detalle
        FROM visitas as v
        JOIN pacientes as p ON v.id_pacientes = p.id
       ");

        return $vistas;
        // return Visitas::all();

    }
    public function store(Request $request)
    {
        $visit = new Visitas();
        $visit->id_pacientes = $request->id_pacientes;
        $visit->fecha = $request->fecha;
        $visit->detalle = $request->detalle;

        $visit->save();
        return $visit;
    }
    public function update(Request $request, $id)
    {
        $visit = Visitas::find($id);
        $visit->id_pacientes = $request->id_pacientes;
        $visit->fecha = $request->fecha;
        $visit->detalle = $request->detalle;

        $visit->save();
        return $visit;
    }
    public function destroy($id)
    {
        return Visitas::destroy($id);
    }
}
