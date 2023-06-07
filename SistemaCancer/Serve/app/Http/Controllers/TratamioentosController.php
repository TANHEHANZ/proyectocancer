<?php

namespace App\Http\Controllers;

use App\Models\Tratamiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class TratamioentosController extends Controller
{
    public function index()
    {
        // return Tratamiento::all();
        $tratamientos = DB::select("SELECT t.id ,p.nombre as nombre_paciente, d.nombre as nombre_doctor, tt.nombre as nombre_tipo_tratamiento, t.fecha_inicio, t.fecha_fin, t.observaciones, t.estadotratamiento FROM tratamientos as t JOIN pacientes as p ON t.id_pacientes = p.id JOIN doctores as d ON t.id_doctores = d.id JOIN tipotratamientos as tt ON t.id_tipotratamientos = tt.id;
       ");

return $tratamientos;
    }
    public function store(Request $request)
    {
        $trata = new Tratamiento();
        $trata->id_pacientes = $request->id_pacientes;
        $trata->id_doctores = $request->id_doctores;
        $trata->id_tipotratamientos = $request->id_tipotratamientos;
        $trata->fecha_inicio = $request->fecha_inicio;
        $trata->fecha_fin = $request->fecha_fin;
        $trata->observaciones = $request->observaciones;
        $trata->estadotratamiento = $request->estadotratamiento;
        $trata->save();
        return $trata;
    }
    public function update(Request $request, $id)
    {
        $trata = Tratamiento::find($id);
        $trata->id_pacientes = $request->id_pacientes;
        $trata->id_doctores = $request->id_doctores;
        $trata->fecha_inicio = $request->fecha_inicio;
        $trata->fecha_fin = $request->fecha_fin;
        $trata->observaciones = $request->observaciones;
        $trata->estadotratamiento = $request->estadotratamiento;
        $trata->save();
        return $trata;
    }
    public function destroy($id)
    {
        return Tratamiento::destroy($id);
    }
}
