<?php

namespace App\Http\Controllers;

use App\Models\Visitas;
use Illuminate\Http\Request;

class VisitasController extends Controller

{
    public function index()
    {
        return Visitas::all();
    }
    public function store(Request $request)
    {
        $visit=new Visitas();
        $visit->id_pacientes=$request->id_pacientes;
        $visit->fecha=$request->fecha;
        $visit->detalle=$request->detalle;
     
        $visit->save();
        return $visit;
    }
    public function update(Request $request, $id)
    {
        $visit=Visitas::find($id);
        $visit->id_pacientes=$request->id_pacientes;
        $visit->fecha=$request->fecha;
        $visit->detalle=$request->detalle;
     
        $visit->save();
        return $visit;
    }
    public function destroy($id)
    {
        return Visitas::destroy($id);
    }
}