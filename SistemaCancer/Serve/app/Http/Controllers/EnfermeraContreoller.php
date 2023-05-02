<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enfermera;


class EnfermeraContreoller extends Controller
{
    public function index()
    {
        return Enfermera::all();
    }
    public function store(Request $request)
    {
        $Enfermera=new Enfermera();
        $Enfermera->nombre=$request->nombre;
        $Enfermera->ap_paterno=$request->ap_paterno;
        $Enfermera->ap_materno=$request->ap_materno;
        $Enfermera->ci=$request->ci;
        $Enfermera->save();
        return $Enfermera;
    }
    public function update(Request $request, $id)
    {
        $Enfermera=Enfermera::find($id);
        $Enfermera->nombre=$request->nombre;
        $Enfermera->ap_paterno=$request->ap_paterno;
        $Enfermera->ap_materno=$request->ap_materno;
        $Enfermera->ci=$request->ci;
        $Enfermera->save();
        return $Enfermera;
    }
    public function destroy($id)
    {
        return Enfermera::destroy($id);
    }
}
