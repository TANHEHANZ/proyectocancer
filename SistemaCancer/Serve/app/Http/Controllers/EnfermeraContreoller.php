<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enfermera;
use Illuminate\Support\Facades\DB;

class EnfermeraContreoller extends Controller
{
    public function index()
    {
        $enfermeras = DB::select("SELECT e.nombre, e.ap_paterno, e.ap_materno, e.ci, e.direccion, e.experiencia, e.correo, ce.nombre as nombre_centro
        FROM enfermeras as e
        JOIN centros as ce ON e.id_centros = ce.id
       ");
        return $enfermeras;
        // return Enfermera::all();
    }
    public function store(Request $request)
    {
        $Enfermera = new Enfermera();
        $Enfermera->nombre = $request->nombre;
        $Enfermera->ap_paterno = $request->ap_paterno;
        $Enfermera->ap_materno = $request->ap_materno;
        $Enfermera->ci = $request->ci;
        $Enfermera->direccion = $request->direccion;
        $Enfermera->experiencia = $request->experiencia;
        $Enfermera->correo = $request->correo;
        $Enfermera->id_centros = $request->id_centros;
        $Enfermera->save();
        return $Enfermera;
    }
    public function update(Request $request, $id)
    {
        $Enfermera = Enfermera::find($id);
        $Enfermera->nombre = $request->nombre;
        $Enfermera->ap_paterno = $request->ap_paterno;
        $Enfermera->ap_materno = $request->ap_materno;
        $Enfermera->ci = $request->ci;
        $Enfermera->direccion = $request->direccion;
        $Enfermera->experiencia = $request->experiencia;
        $Enfermera->correo = $request->correo;
        $Enfermera->id_centros = $request->id_centros;
        $Enfermera->save();
        return $Enfermera;
    }
    public function destroy($id)
    {
        return Enfermera::destroy($id);
    }
}
