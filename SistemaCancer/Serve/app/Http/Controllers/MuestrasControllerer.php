<?php

namespace App\Http\Controllers;

use App\Models\Muestras;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class MuestrasControllerer extends Controller
{
    public function index()
    {
        $muestras = DB::select("SELECT  m.id,p.nombre as nombre_paciente, m.descripcion, m.fecha, tm.nombre as nombre_tipo_muestra, e.nombre as nombre_enfermera
        FROM muestras as m
        JOIN pacientes as p ON m.id_pacientes = p.id
        JOIN tipomuestras as tm ON m.id_tipomuestras = tm.id
        JOIN enfermeras as e ON m.id_enfermeras = e.id
       ");

return $muestras;
        // return Muestras::all();
    }
    public function store(Request $request)
    {
        $muestras = new Muestras();
        $muestras->id_pacientes = $request->id_pacientes;
        $muestras->fecha = $request->fecha;
        $muestras->descripcion = $request->descripcion;
        $muestras->id_tipomuestras = $request->id_tipomuestras;
        $muestras->id_enfermeras = $request->id_enfermeras;
        $muestras->save();
        return $muestras;
    }
    public function update(Request $request, $id)
    {
        $muestras =Muestras::find($id);
        $muestras->id_pacientes = $request->id_pacientes;
        $muestras->fecha = $request->fecha;
        $muestras->descripcion = $request->descripcion;
        $muestras->id_tipomuestras = $request->id_tipomuestras;
        $muestras->id_enfermeras = $request->id_enfermeras;
        $muestras->save();
        return $muestras;
    }
    public function destroy($id){
        return Muestras::destroy($id);
    }
}
