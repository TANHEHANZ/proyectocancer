<?php

namespace App\Http\Controllers;

use App\Models\Seguimientos;
use Illuminate\Http\Request;

class SeguimientoControllerer extends Controller
{
  
    public function index()
    {
        return Seguimientos::all();
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
