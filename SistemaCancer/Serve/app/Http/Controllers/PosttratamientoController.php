<?php

namespace App\Http\Controllers;
use App\Models\Posttratamiento;

use Illuminate\Http\Request;

class PosttratamientoController extends Controller

{
    public function index()
    {
        return Posttratamiento::all();
    }
    
    public function store(Request $request)
    {
        $posteo=new Posttratamiento();
        $posteo->titulo=$request->titulo;
        $posteo->descripcion=$request->descripcion;
        $posteo->contenido=$request->contenido;
        $posteo->fecha_publicar=$request->fecha_publicar;
        $posteo->save();
        return $posteo;
    }
    public function update(Request $request, $id)
    {
        $posteo=Posttratamiento::find($id);
        $posteo->titulo=$request->titulo;
        $posteo->descripcion=$request->descripcion;
        $posteo->contenido=$request->contenido;
        $posteo->fecha_publicar=$request->fecha_publicar;
        $posteo->save();
        return $posteo;
    }
    public function destroy($id)
    {
        return Posttratamiento::destroy($id);
    }
}