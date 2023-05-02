<?php

namespace App\Http\Controllers;

use App\Models\Provincias;
use Illuminate\Http\Request;

class ProvinciasControllererrer extends Controller
{
    public function index()
    {
        return Provincias::all();
    }
    public function store(Request $request)
    {
        $procincias=new Provincias();
        $procincias->nombre=$request->nombre;
        $procincias->id_ciudades=$request->id_ciudades;
        $procincias->save();
        return $procincias;
    }
    public function update(Request $request, $id)
    {
        $procincias=Provincias::find($id);
        $procincias->nombre=$request->nombre;
        $procincias->id_ciudades=$request->id_ciudades;
        $procincias->save();
        return $procincias;
    }
    public function destroy($id)
    {
        return Provincias::destroy($id);
    }
}
