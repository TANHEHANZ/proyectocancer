<?php

namespace App\Http\Controllers;

use App\Models\Resultados;
use Illuminate\Http\Request;

class ResultadosControllerer extends Controller
{
    public function index()
    {
        return Resultados::all();
    }
    public function store(Request $request)
    {
      
        $resultados = new Resultados();
        $resultados->resultados = $request->resultados;
        $resultados->id_pacientes = $request->id_pacientes;
        $resultados->id_tiposcancers = $request->id_pacientes;
        $resultados->id_muestras = $request->id_muestras;
        $resultados->id_laboratorios = $request->id_laboratorios;
        $resultados->fecha = $request->fecha;
        $resultados->save();
        return $resultados;
    }
    public function update(Request $request, $id)
    {
        $resultados = Resultados::find($id);
        $resultados->resultados = $request->resultados;
        $resultados->id_pacientes = $request->id_pacientes;
        $resultados->id_tiposcancers = $request->id_pacientes;
        $resultados->id_muestras = $request->id_muestras;
        $resultados->id_laboratorios = $request->id_laboratorios;
        $resultados->fecha = $request->fecha;
        $resultados->save();
        return $resultados;
    }
    public function destroy($id)
    {
        return Resultados::destroy($id);
    }
}
