<?php

namespace App\Http\Controllers;
use App\Models\Pacientes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class PacientesController extends Controller
{
    public function index()
    {
        $pacientes = DB::select("SELECT p.nombre, p.ap_paterno, p.ap_materno, p.sexo, p.fecha_nacimiento, p.telefono, p.ci, p.direccion, p.correo, p.edad, d.nombre as nombre_doctor, e.nombre as nombre_enfermera FROM pacientes as p LEFT JOIN doctores as d ON p.id_doctores = d.id LEFT JOIN enfermeras as e ON p.id_enfermeras = e.id;
       ");
       return $pacientes;
        // return Pacientes::all();
    }
    public function store(Request $request)
    {
        $pacientes=new Pacientes();
        $pacientes->nombre=$request->nombre;
        $pacientes->ap_paterno=$request->ap_paterno;
        $pacientes->ap_materno=$request->ap_materno;
        $pacientes->sexo=$request->sexo;
        $pacientes->fecha_nacimiento=$request->fecha_nacimiento;
        $pacientes->telefono=$request->telefono;
        $pacientes->ci=$request->ci;
        $pacientes->direccion=$request->direccion;
        $pacientes->correo=$request->correo;
        $pacientes->edad=$request->edad;
        $pacientes->id_doctores=$request->id_doctores;
        $pacientes->id_enfermeras=$request->id_enfermeras;
        $pacientes->save();
        return $pacientes;
    }
    public function update(Request $request, $id)
    {
        $pacientes=Pacientes::find($id);
        $pacientes->nombre=$request->nombre;
        $pacientes->ap_paterno=$request->ap_paterno;
        $pacientes->ap_materno=$request->ap_materno;
        $pacientes->sexo=$request->sexo;
        $pacientes->fecha_nacimiento=$request->fecha_nacimiento;
        $pacientes->telefono=$request->telefono;
        $pacientes->ci=$request->ci;
        $pacientes->direccion=$request->direccion;
        $pacientes->correo=$request->correo;
        $pacientes->edad=$request->edad;
        $pacientes->id_doctores=$request->id_doctores;
        $pacientes->id_enfermeras=$request->id_enfermeras;
        $pacientes->save();
        return $pacientes;
    }
    public function destroy($id)
    {
        return Pacientes::destroy($id);
    }
}
