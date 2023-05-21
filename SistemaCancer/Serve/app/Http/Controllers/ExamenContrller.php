<?php

namespace App\Http\Controllers;

use App\Models\Examen;
use Illuminate\Http\Request;

class ExamenContrller extends Controller
{
    public function index()
    {
        return Examen::all();
    }
    public function store(Request $request)
    {
        $exam = new Examen();
        $exam->id_pacientes = $request->id_pacientes;
        $exam->id_tipoexamens = $request->id_tipoexamens;
        $exam->descripcion = $request->descripcion;
        $exam->fecha = $request->fecha;
        $exam->resultado = $request->resultado;
        $exam->save();
        return $exam;
    }
    public function update(Request $request, $id)
    {
        $exam =Examen::find($id);
        $exam->id_pacientes = $request->id_pacientes;
        $exam->id_tipoexamens = $request->id_tipoexamens;
        $exam->descripcion = $request->descripcion;
        $exam->fecha = $request->fecha;
        $exam->resultado = $request->resultado;
        $exam->save();
        return $exam;
    }
    public function destroy($id){
        return Examen::destroy($id);
    }

}
