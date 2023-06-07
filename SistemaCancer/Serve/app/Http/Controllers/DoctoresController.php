<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctores;
use Illuminate\Support\Facades\DB;

class DoctoresController extends Controller
{
    public function index()
    {
        $doctores = DB::select("SELECT d.id, d.nombre, d.ap_paterno, d.ap_materno, d.ci, d.correo, d.Direccion, d.Credenciales, d.descripcion, ce.nombre as nombre_centro, e.nombre as nombre_especialidad
        FROM doctores as d
        JOIN centros as ce
        ON d.id_centros = ce.id
        JOIN especialidades as e
        ON d.id_especialidades = e.id;
       ");
       return $doctores;
        // return Doctores::all();
    }
    public function store(Request $request)
    {
        $doctores=new Doctores();
        $doctores->nombre=$request->nombre;
        $doctores->ap_paterno=$request->ap_paterno;
        $doctores->ap_materno=$request->ap_materno;
        $doctores->ci=$request->ci;
        $doctores->correo=$request->correo;
        $doctores->Direccion=$request->Direccion;
        $doctores->Credenciales=$request->Credenciales;
        $doctores->descripcion=$request->descripcion;
        $doctores->id_especialidades=$request->id_especialidades;
        $doctores->id_centros=$request->id_centros;
        $doctores->save();
        return $doctores;
    }
    public function update(Request $request, $id)
    {
        $doctores=Doctores::find($id);
        $doctores->nombre=$request->nombre;
        $doctores->ap_paterno=$request->ap_paterno;
        $doctores->ap_materno=$request->ap_materno;
        $doctores->ci=$request->ci;
        $doctores->correo=$request->correo;
        $doctores->Direccion=$request->Direccion;
        $doctores->Credenciales=$request->Credenciales;
        $doctores->descripcion=$request->descripcion;
        $doctores->id_especialidades=$request->id_especialidades;
        $doctores->id_centros=$request->id_centros;
        $doctores->save();
        return $doctores;
    }
    public function destroy($id)
    {
        return Doctores::destroy($id);
    }
}
