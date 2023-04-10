<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Especialidades;
class EspecialidadesController extends Controller
{
    public function index()
    {
        return Especialidades::all();
    }
    public function store(Request $request)
    {
        $especialidad=new Especialidades();
        $especialidad->nombre=$request->nombre;
        $especialidad->save();
        return $especialidad;
    }
    public function update(Request $request, $id)
    {
        $especialidad=Especialidades::find($id);
        $especialidad->nombre=$request->nombre;
        $especialidad->save();
        return $especialidad;
    }
    public function destroy($id)
    {
        return Especialidades::destroy($id);
    }
}
