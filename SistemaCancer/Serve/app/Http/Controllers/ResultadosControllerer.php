<?php

namespace App\Http\Controllers;

use App\Models\Resultados;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ResultadosControllerer extends Controller
{
    public function index()
    {
        $resultados = DB::select("SELECT r.id, r.resultados, p.nombre as nombre_paciente, tc.nombre as nombre_tipo_cancer, m.descripcion as descripcion_muestra, l.nombre as nombre_laboratorio, r.fecha FROM resultados as r JOIN pacientes as p ON r.id_pacientes = p.id JOIN tiposcancers as tc ON r.id_tiposcancers = tc.id JOIN muestras as m ON r.id_muestras = m.id JOIN laboratorios as l ON r.id_laboratorios = l.id;
       ");

return $resultados;
    
    }
    public function store(Request $request)
    {
       
        $resultados = new Resultados();
        $resultados->resultados = $request->resultados;
        $resultados->id_pacientes = $request->id_pacientes;
        $resultados->id_tiposcancers = $request->id_tiposcancers;
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
        $resultados->id_tiposcancers = $request->id_tiposcancers;
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
