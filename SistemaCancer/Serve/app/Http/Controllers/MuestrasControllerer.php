<?php

namespace App\Http\Controllers;

use App\Models\Muestras;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class MuestrasControllerer extends Controller
{
    public function index()
    {
        $muestras = DB::select("SELECT d.nombre, d.ap_paterno, d.ap_materno, d.ci, d.correo, d.Direccion, d.Credenciales, d.descripcion, ce.nombre as nombre_centro, e.nombre as nombre_especialidad FROM doctores as d JOIN centros as ce ON d.id_centros = ce.id JOIN especialidades as e ON d.id_especialidades = e.id;
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
