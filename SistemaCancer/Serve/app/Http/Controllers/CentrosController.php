<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Centros;

class CentrosController extends Controller
{
    public function index()
    {
        return Centros::all();
    }
    public function store(Request $request)
    {
        $Centros=new Centros();
        $Centros->nombre=$request->nombre;
        $Centros->ubicacion=$request->ubicacion;
        $Centros->save();
        return $Centros;
    }
    public function update(Request $request, $id)
    {
        $Centros=Centros::find($id);
        $Centros->nombre=$request->nombre;
        $Centros->ubicacion=$request->ubicacion;
        $Centros->save();
        return $Centros;
    }
    public function destroy($id)
    {
        return Centros::destroy($id);
    }
}
