<?php

namespace App\Http\Controllers;

use App\Models\Seguimientos;
use Illuminate\Http\Request;

class SeguimientoControllerer extends Controller
{
    // 'id_muestras',
    // 'id_resultados',
    // 'id_doctores',
    // 'id_centros',
    // 'fecha',
    // 'observaciones',
    public function index()
    {
        return Seguimientos::all();
    }
    public function store(Request $request)
    {
        $segumientos = new Seguimientos();
        $segumientos->id_muestras = $request->id_muestras;
        $segumientos->id_resultados = $request->id_resultados;
        $segumientos->id_doctores = $request->id_doctores;
        $segumientos->id_centros = $request->id_centros;
        $segumientos->fecha = $request->fecha;
        $segumientos->observaciones = $request->observaciones;
        $segumientos->save();
        return $segumientos;
    }
    public function update(Request $request , $id){
        $segumientos=Seguimientos::find($id);
        $segumientos->id_muestras = $request->id_muestras;
        $segumientos->id_resultados = $request->id_resultados;
        $segumientos->id_doctores = $request->id_doctores;
        $segumientos->id_centros = $request->id_centros;
        $segumientos->fecha = $request->fecha;
        $segumientos->observaciones = $request->observaciones;
        $segumientos->save();
        return $segumientos;
    }
    public function destroy($id){
        return Seguimientos::destroy($id);
    }
}
