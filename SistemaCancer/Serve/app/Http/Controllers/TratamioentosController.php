<?php

namespace App\Http\Controllers;

use App\Models\Tratamiento;
use Illuminate\Http\Request;

class TratamioentosController extends Controller
{
    public function index()
    {
        return Tratamiento::all();
    }
    public function store(Request $request)
    {
        $trata = new Tratamiento();
        $trata->id_pacientes = $request->id_pacientes;
        $trata->id_doctores = $request->id_doctores;
        $trata->id_tipotratamientos = $request->id_tipotratamientos;
        $trata->fecha_inicio = $request->fecha_inicio;
        $trata->fecha_fin = $request->fecha_fin;
        $trata->observaciones = $request->observaciones;
        $trata->estadotratamiento = $request->estadotratamiento;
        $trata->save();
        return $trata;
    }
    public function update(Request $request, $id)
    {
        $trata = Tratamiento::find($id);
        $trata->id_pacientes = $request->id_pacientes;
        $trata->id_doctores = $request->id_doctores;
        $trata->fecha_inicio = $request->fecha_inicio;
        $trata->fecha_fin = $request->fecha_fin;
        $trata->observaciones = $request->observaciones;
        $trata->estadotratamiento = $request->estadotratamiento;
        $trata->save();
        return $trata;
    }
    public function destroy($id)
    {
        return Tratamiento::destroy($id);
    }
}
