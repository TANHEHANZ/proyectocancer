<?php

namespace App\Http\Controllers;

use App\Models\Tipoexamens;
use Illuminate\Http\Request;


class TipoexamensController extends Controller
{
    public function index()
    {
        return Tipoexamens::all();
    }
    public function store(Request $request)
    {
        $tipexamens = new Tipoexamens();
        $tipexamens->nombre = $request->nombre;
        $tipexamens->save();
        return $tipexamens;
    }
    public function update(Request $request, $id)
    {
        $tipexamens = Tipoexamens::find($id);
        $tipexamens->nombre = $request->nombre;
        $tipexamens->save();
        return $tipexamens;
    }
    public function destroy($id)
    {
        return Tipoexamens::destroy($id);
    }
}
