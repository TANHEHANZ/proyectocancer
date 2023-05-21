<?php

namespace App\Http\Controllers;

use App\Models\Tipotratamiento;
use Illuminate\Http\Request;

class TipotratamientoController extends Controller
{
    public function index()
    {
        return Tipotratamiento::all();
    }
    public function store(Request $request)
    {
    $tipotrata=new Tipotratamiento();
    $tipotrata->nombre=$request->nombre;
        $tipotrata->save();
        return $tipotrata;
    }
    public function update(Request $request, $id)
    {
        $tipotrata=Tipotratamiento::find($id);
        $tipotrata->nombre=$request->nombre;
        $tipotrata->save();
        return $tipotrata;
    }
    public function destroy($id)
    {
        return Tipotratamiento::destroy($id);
    }
}
