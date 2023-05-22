<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Laboratorios;

class LaboratorioController extends Controller
{
    public function index()
    {
        return Laboratorios::all();
    }
    public function store(Request $request)
    {
        $Laboratorios=new Laboratorios();
        $Laboratorios->nombre=$request->nombre;
        $Laboratorios->ubicacion=$request->ubicacion;
        $Laboratorios->contacto=$request->contacto;
        $Laboratorios->email=$request->email;
        $Laboratorios->save();
        return $Laboratorios;
    }
    public function update(Request $request, $id)
    {
        $Laboratorios=Laboratorios::find($id);
        $Laboratorios->nombre=$request->nombre;
        $Laboratorios->ubicacion=$request->ubicacion;
        $Laboratorios->contacto=$request->contacto;
        $Laboratorios->email=$request->email;
        $Laboratorios->save();
        return $Laboratorios;
    }
    public function destroy($id)
    {
        return Laboratorios::destroy($id);
    }
    public function obtenerPacientesNoNotificados()
    {
        $pacientes = Laboratorios::where('notificado', false)->get();
        return response()->json($pacientes);
    }
}
