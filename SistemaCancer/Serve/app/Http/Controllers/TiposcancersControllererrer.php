<?php

namespace App\Http\Controllers;

use App\Models\Tiposcancers;
use Illuminate\Http\Request;


class TiposcancersControllererrer extends Controller
{
     public function index()
    {
        return Tiposcancers::all();
    }
    public function store(Request $request)
    {
    $tiposcancers=new Tiposcancers();
    $tiposcancers->nombre=$request->nombre;
        $tiposcancers->save();
        return $tiposcancers;
    }
    public function update(Request $request, $id)
    {
        $tiposcancers=Tiposcancers::find($id);
        $tiposcancers->nombre=$request->nombre;
        $tiposcancers->save();
        return $tiposcancers;
    }
    public function destroy($id)
    {
        return Tiposcancers::destroy($id);
    }
}
