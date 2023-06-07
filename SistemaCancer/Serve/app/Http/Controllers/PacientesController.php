<?php

namespace App\Http\Controllers;
use App\Models\Pacientes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class PacientesController extends Controller
{
    public function index()
    {
    $pacientes = DB::select("SELECT p.id ,p.nombre, p.ap_paterno, p.ap_materno, p.sexo, p.fecha_nacimiento, p.telefono, p.ci, p.direccion, p.correo, p.edad, d.nombre as nombre_doctor, e.nombre as nombre_enfermera FROM pacientes as p LEFT JOIN doctores as d ON p.id_doctores = d.id LEFT JOIN enfermeras as e ON p.id_enfermeras = e.id;
       ");
    return $pacientes;
}
    public function store(Request $request)
    {
        $paci=new Pacientes();
        $paci->	nombre=$request->	nombre;
        $paci->ap_paterno=$request->ap_paterno;
        $paci->ap_materno=$request->ap_materno;
        $paci->sexo=$request->sexo;
        $paci->fecha_nacimiento=$request->fecha_nacimiento;
        $paci->telefono=$request->telefono;
        $paci->ci=$request->ci;
        $paci->direccion=$request->direccion;
        $paci->correo=$request->correo;
        $paci->	edad=$request->	edad;
        $paci->id_doctores=$request->id_doctores;
        $paci->id_enfermeras=$request->id_enfermeras;
        $paci->save();
        return $paci;
    }
    public function update(Request $request, $id)
    {
        $paci=Pacientes::find($id);
        $paci->	nombre=$request->	nombre;
        $paci->ap_paterno=$request->ap_paterno;
        $paci->ap_materno=$request->ap_materno;
        $paci->sexo=$request->sexo;
        $paci->fecha_nacimiento=$request->fecha_nacimiento;
        $paci->telefono=$request->telefono;
        $paci->ci=$request->ci;
        $paci->direccion=$request->direccion;
        $paci->correo=$request->correo;
        $paci->	edad=$request->	edad;
        $paci->id_doctores=$request->id_doctores;
        $paci->id_enfermeras=$request->id_enfermeras;
        $paci->save();
        return $paci;
    }
    public function destroy($id)
    {
        return Pacientes::destroy($id);
    }
}
