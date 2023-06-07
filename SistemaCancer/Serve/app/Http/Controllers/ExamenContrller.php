<?php
namespace App\Http\Controllers;
use App\Models\Examen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ExamenContrller extends Controller
{
    public function index()
    {
        $examenes = DB::select("SELECT e.id, p.nombre as nombre_paciente, te.nombre as nombre_tipo_examen, e.descripcion, e.fecha, e.resultado
        FROM examens as e
        JOIN pacientes as p ON e.id_pacientes = p.id
        JOIN tipoexamens as te ON e.id_tipoexamens = te.id
       ");
        return $examenes;
    }
    public function store(Request $request)
    {
        $exam = new Examen();
        $exam->id_pacientes = $request->id_pacientes;
        $exam->id_tipoexamens = $request->id_tipoexamens;
        $exam->descripcion = $request->descripcion;
        $exam->fecha = $request->fecha;
        $exam->resultado = $request->resultado;
        $exam->save();
        return $exam;
    }
    public function update(Request $request, $id)
    {
        $exam = Examen::find($id);
        $exam->id_pacientes = $request->id_pacientes;
        $exam->id_tipoexamens = $request->id_tipoexamens;
        $exam->descripcion = $request->descripcion;
        $exam->fecha = $request->fecha;
        $exam->resultado = $request->resultado;
        $exam->save();
        return $exam;
    }
    public function destroy($id)
    {
        return Examen::destroy($id);
    }
}
