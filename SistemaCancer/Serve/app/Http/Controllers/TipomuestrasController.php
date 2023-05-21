<?php

namespace App\Http\Controllers;

use App\Models\Tipomuestras;
use Illuminate\Http\Request;
class TipomuestrasController extends Controller
{
    public function index()
    {
        return Tipomuestras::all();
    }
    public function store(Request $request)
    {
        $tipmuestras = new Tipomuestras();
        $tipmuestras->nombre = $request->nombre;
        $tipmuestras->save();
        return $tipmuestras;
    }
    public function update(Request $request, $id)
    {
        $tipmuestras = Tipomuestras::find($id);
        $tipmuestras->nombre = $request->nombre;
        $tipmuestras->save();
        return $tipmuestras;
    }
    public function destroy($id)
    {
        return Tipomuestras::destroy($id);
    }
}
