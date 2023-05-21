<?php

namespace App\Http\Controllers;
use App\Models\Pacientes;
use Illuminate\Http\Request;

class PacientesController extends Controller
{
    public function index()
    {
        return Pacientes::all();
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
