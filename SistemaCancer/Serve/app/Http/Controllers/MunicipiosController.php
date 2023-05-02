<?php

namespace App\Http\Controllers;

use App\Models\Municipios;
use Illuminate\Http\Request;

class MunicipiosController extends Controller
{
    public function index()
    {
        return Municipios::all();
    }
    public function store(Request $request)
    {
        $mun=new Municipios();
        $mun->nombre=$request->nombre;
        $mun->id_provincias=$request->id_provincias;
        $mun->save();
        return $mun;
    }
    public function update(Request $request, $id)
    {
        $mun=Municipios::find($id);
        $mun->nombre=$request->nombre;
        $mun->id_provincias=$request->id_provincias;
        $mun->save();
        return $mun;
    }
    public function destroy($id)
    {
        return Municipios::destroy($id);
    }
}
