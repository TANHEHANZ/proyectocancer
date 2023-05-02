<?php

namespace App\Http\Controllers;

use App\Models\Muestras;
use Illuminate\Http\Request;

class MuestrasControllerer extends Controller
{
    public function index()
    {
        return Muestras::all();
    }
    public function store(Request $request)
    {
        $muestras = new Muestras();
        $muestras->id_pacientes = $request->id_pacientes;
        $muestras->id_centros = $request->id_centros;
        $muestras->id_tiposcancers = $request->id_tiposcancers;
        $muestras->id_enfermeras = $request->id_enfermeras;
        $muestras->fecha = $request->fecha;
        $muestras->save();
        return $muestras;
    }
    public function update(Request $request, $id)
    {
        $muestras =Muestras::find($id);
        $muestras->id_pacientes = $request->id_pacientes;
        $muestras->id_centros = $request->id_centros;
        $muestras->id_tiposcancers = $request->id_tiposcancers;
        $muestras->id_enfermeras = $request->id_enfermeras;
        $muestras->fecha = $request->fecha;
        $muestras->save();
        return $muestras;
    }
    public function destroy($id){
        return Muestras::destroy($id);
    }
}
