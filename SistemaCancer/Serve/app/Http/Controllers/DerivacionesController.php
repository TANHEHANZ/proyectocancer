<?php

namespace App\Http\Controllers;

use App\Models\Derivaciones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DerivacionesController extends Controller
{
    public function index()
    {
        $derivaciones = DB::select("SELECT p.nombre as nombre_paciente, doc.nombre as nombre_doctor, t.estadotratamiento as estadotratamiento, ce.nombre as nombre_centro, r.resultados as nombre_resultado, d.fecha_inicio, d.fecha_fin ,d.id
        FROM derivaciones as d
        JOIN pacientes as p ON d.id_pacientes = p.id
        JOIN doctores as doc ON d.id_doctores = doc.id
        JOIN tratamientos as t ON d.id_tratamientos = t.id
        JOIN centros as ce ON d.id_centros = ce.id
        JOIN resultados as r ON d.id_resultados = r.id
       ");

return $derivaciones;
        // return Derivaciones::all();
    }
    public function store(Request $request)
    {
        $deriva=new Derivaciones();
        $deriva->id_pacientes=$request->id_pacientes;
        $deriva->id_doctores=$request->id_doctores;
        $deriva->id_tratamientos=$request->id_tratamientos;
        $deriva->id_centros=$request->id_centros;
        $deriva->id_resultados=$request->id_resultados;
        $deriva->fecha_inicio=$request->fecha_inicio;
        $deriva->fecha_fin=$request->fecha_fin;
        $deriva->save();
        return $deriva;
    }
    public function update(Request $request, $id)
    {
        $deriva=Derivaciones::find($id);
        $deriva->id_pacientes=$request->id_pacientes;
        $deriva->id_doctores=$request->id_doctores;
        $deriva->id_tratamientos=$request->id_tratamientos;
        $deriva->id_centros=$request->id_centros;
        $deriva->id_resultados=$request->id_resultados;
        $deriva->fecha_inicio=$request->fecha_inicio;
        $deriva->fecha_fin=$request->fecha_fin;
        $deriva->save();
        return $deriva;
    }
    public function destroy($id)
    {
        return Derivaciones::destroy($id);
    }
}
