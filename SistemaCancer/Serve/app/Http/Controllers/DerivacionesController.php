<?php

namespace App\Http\Controllers;

use App\Models\Derivaciones;
use Illuminate\Http\Request;

class DerivacionesController extends Controller
{
    public function index()
    {
        return Derivaciones::all();
    }
    public function store(Request $request)
    {
        $deriva=new Derivaciones();
        $deriva->id_pacientes=$request->id_pacientes;
        $deriva->id_doctores=$request->id_doctores;
        $deriva->id_tratamientos=$request->id_tratamientos;
        $deriva->id_centros=$request->id_centros;
        $deriva->id_resultados=$request->id_resultados;
        $deriva->fecha_inicio=$request->fecha_inicio;
        $deriva->fecha_fin=$request->fecha_fin;
        $deriva->save();
        return $deriva;
    }
    public function update(Request $request, $id)
    {
        $deriva=Derivaciones::find($id);
        $deriva->id_pacientes=$request->id_pacientes;
        $deriva->id_doctores=$request->id_doctores;
        $deriva->id_tratamientos=$request->id_tratamientos;
        $deriva->id_centros=$request->id_centros;
        $deriva->id_resultados=$request->id_resultados;
        $deriva->fecha_inicio=$request->fecha_inicio;
        $deriva->fecha_fin=$request->fecha_fin;
        $deriva->save();
        return $deriva;
    }
    public function destroy($id)
    {
        return Derivaciones::destroy($id);
    }
}