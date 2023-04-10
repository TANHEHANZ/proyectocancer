<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctores;


class DoctoresController extends Controller
{
    public function index()
    {
        return Doctores::all();
    }
    public function store(Request $request)
    {
        $doctores=new Doctores();
        $doctores->nombre=$request->nombre;
        $doctores->ap_paterno=$request->ap_paterno;
        $doctores->ap_materno=$request->ap_materno;
        $doctores->ci=$request->ci;
        $doctores->id_especialidades=$request->id_especialidades;
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
        $doctores->id_especialidades=$request->id_especialidades;
        $doctores->save();
        return $doctores;
    }
    public function destroy($id)
    {
        return Doctores::destroy($id);
    }
}
