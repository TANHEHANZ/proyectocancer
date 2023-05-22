<?php

namespace App\Http\Controllers;

use App\Models\Seguimientos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SeguimientoControllerer extends Controller
{
  
    public function index()
    {
        $seguimientos = DB::select("SELECT p.nombre as nombre_paciente, m.descripcion as descripcion_muestra, r.resultados, d.nombre as nombre_doctor, ce.nombre as nombre_centro, s.fecha
        FROM seguimientos as s
        JOIN pacientes as p ON s.id_pacientes = p.id
        JOIN muestras as m ON s.id_muestras = m.id
        JOIN resultados as r ON s.id_resultados = r.id
        JOIN doctores as d ON s.id_doctores = d.id
        JOIN centros as ce ON s.id_centros = ce.id
       ");

return $seguimientos;
        // return Seguimientos::all();
    }
    public function store(Request $request)
    {
        $segumient = new Seguimientos();
        $segumient->id_pacientes = $request->id_pacientes;
        $segumient->id_muestras = $request->id_muestras;
        $segumient->id_resultados = $request->id_resultados;
        $segumient->id_doctores = $request->id_doctores;
        $segumient->id_centros = $request->id_centros;
        $segumient->fecha = $request->fecha;
        $segumient->save();
        return $segumient;
    }
    public function update(Request $request , $id){
        $segumient=Seguimientos::find($id);
        $segumient->id_pacientes = $request->id_pacientes;
        $segumient->id_muestras = $request->id_muestras;
        $segumient->id_resultados = $request->id_resultados;
        $segumient->id_doctores = $request->id_doctores;
        $segumient->id_centros = $request->id_centros;
        $segumient->fecha = $request->fecha;
        $segumient->save();
        return $segumient;
    }
    public function destroy($id){
        return Seguimientos::destroy($id);
    }
}
