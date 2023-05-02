<?php

namespace App\Http\Controllers;

use App\Models\Ciudades;
use Illuminate\Http\Request;

class CiudadesControllererrer extends Controller
{
    public function index()
    {
        return Ciudades::all();
    }
    public function store(Request $request)
    {
        $ciudades = new Ciudades();
        $ciudades->nombre = $request->nombre;
        $ciudades->save();
        return $ciudades;
    }
    public function update(Request $request, $id)
    {
        $ciudades = Ciudades::find($id);
        $ciudades->nombre = $request->nombre;
        $ciudades->save();
        return $ciudades;
    }
    public function destroy($id)
    {
        return Ciudades::destroy($id);
    }
}
