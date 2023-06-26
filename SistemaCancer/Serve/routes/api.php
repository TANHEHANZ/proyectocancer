<?php
use App\Http\Controllers\CentrosController;
use App\Http\Controllers\ConsultasController;
use App\Http\Controllers\DerivacionesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PacientesController;
use App\Http\Controllers\DoctoresController;
use App\Http\Controllers\EnfermeraContreoller;
use App\Http\Controllers\EspecialidadesController;
use App\Http\Controllers\ExamenContrller;
use App\Http\Controllers\LaboratorioController;
use App\Http\Controllers\MuestrasControllerer;
use App\Http\Controllers\ReportesController;
use App\Http\Controllers\ResultadosControllerer;
use App\Http\Controllers\SeguimientoControllerer;
use App\Http\Controllers\TipoexamensController;
use App\Http\Controllers\TipomuestrasController;
use App\Http\Controllers\TiposcancersControllererrer;
use App\Http\Controllers\TipotratamientoController;
use App\Http\Controllers\TratamioentosController;
use App\Http\Controllers\VisitasController;
use App\Http\Controllers\PosttratamientoController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('registeruser', [UserController::class, 'Userregister']);

Route::group(['middleware' => ["auth:sanctum"]], function () {
    Route::get('users-profile', [UserController::class, 'userProfile']);
    Route::get('logout', [UserController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/centros', [CentrosController::class, 'index']);
Route::post('/centros', [CentrosController::class, 'store']);
Route::put('/centros/{id}', [CentrosController::class, 'update']);
Route::delete('/centros/{id}', [CentrosController::class, 'destroy']);


Route::get('/derivaciones', [DerivacionesController::class, 'index']);
Route::post('/derivaciones', [DerivacionesController::class, 'store']);
Route::put('/derivaciones/{id}', [DerivacionesController::class, 'update']);
Route::delete('/derivaciones/{id}', [DerivacionesController::class, 'destroy']);

Route::get('/doctores', [DoctoresController::class, 'index']);
Route::post('/doctores', [DoctoresController::class, 'store']);
Route::put('/doctores/{id}', [DoctoresController::class, 'update']);
Route::delete('/doctores/{id}', [DoctoresController::class, 'destroy']);

Route::get('/enfermera', [EnfermeraContreoller::class, 'index']);
Route::post('/enfermera', [EnfermeraContreoller::class, 'store']);
Route::put('/enfermera/{id}', [EnfermeraContreoller::class, 'update']);
Route::delete('/enfermera/{id}', [EnfermeraContreoller::class, 'destroy']);


Route::get('/especialidades', [EspecialidadesController::class, 'index']);
Route::post('/especialidades', [EspecialidadesController::class, 'store']);
Route::put('/especialidades/{id}', [EspecialidadesController::class, 'update']);
Route::delete('/especialidades/{id}', [EspecialidadesController::class, 'destroy']);

Route::get('/examenes', [ExamenContrller::class, 'index']);
Route::post('/examenes', [ExamenContrller::class, 'store']);
Route::put('/examenes/{id}', [ExamenContrller::class, 'update']);
Route::delete('/examenes/{id}', [ExamenContrller::class, 'destroy']);

Route::get('/laboratorio', [LaboratorioController::class, 'index']);
Route::post('/laboratorio', [LaboratorioController::class, 'store']);
Route::put('/laboratorio/{id}', [LaboratorioController::class, 'update']);
Route::delete('/laboratorio/{id}', [LaboratorioController::class, 'destroy']);


Route::get('/muestras', [MuestrasControllerer::class, 'index']);
Route::post('/muestras', [MuestrasControllerer::class, 'store']);
Route::put('/muestras/{id}', [MuestrasControllerer::class, 'update']);
Route::delete('/muestras/{id}', [MuestrasControllerer::class, 'destroy']);

Route::get('/pacientes', [PacientesController::class, 'index']);
Route::post('/pacientes', [PacientesController::class, 'store']);
Route::put('/pacientes/{id}', [PacientesController::class, 'update']);
Route::delete('/pacientes/{id}', [PacientesController::class, 'destroy']);

Route::get('/resultas', [ResultadosControllerer::class, 'index']);
Route::post('/resultas', [ResultadosControllerer::class, 'store']);
Route::put('/resultas/{id}', [ResultadosControllerer::class, 'update']);
Route::delete('/resultas/{id}', [ResultadosControllerer::class, 'destroy']);

Route::get('/seguimiento', [SeguimientoControllerer::class, 'index']);
Route::post('/seguimiento', [SeguimientoControllerer::class, 'store']);
Route::put('/seguimiento/{id}', [SeguimientoControllerer::class, 'update']);
Route::delete('/seguimiento/{id}', [SeguimientoControllerer::class, 'destroy']);

Route::get('/tipoexamens', [TipoexamensController::class, 'index']);
Route::post('/tipoexamens', [TipoexamensController::class, 'store']);
Route::put('/tipoexamens/{id}', [TipoexamensController::class, 'update']);
Route::delete('/tipoexamens/{id}', [TipoexamensController::class, 'destroy']);

Route::get('/tipomuestras', [TipomuestrasController::class, 'index']);
Route::post('/tipomuestras', [TipomuestrasController::class, 'store']);
Route::put('/tipomuestras/{id}', [TipomuestrasController::class, 'update']);
Route::delete('/tipomuestras/{id}', [TipomuestrasController::class, 'destroy']);

Route::get('/tiposcancers', [TiposcancersControllererrer::class, 'index']);
Route::post('/tiposcancers', [TiposcancersControllererrer::class, 'store']);
Route::put('/tiposcancers/{id}', [TiposcancersControllererrer::class, 'update']);
Route::delete('/tiposcancers/{id}', [TiposcancersControllererrer::class, 'destroy']);

Route::get('/tipotratamiento', [TipotratamientoController::class, 'index']);
Route::post('/tipotratamiento', [TipotratamientoController::class, 'store']);
Route::put('/tipotratamiento/{id}', [TipotratamientoController::class, 'update']);
Route::delete('/tipotratamiento/{id}', [TipotratamientoController::class, 'destroy']);

Route::get('/tratamiento', [TratamioentosController::class, 'index']);
Route::post('/tratamiento', [TratamioentosController::class, 'store']);
Route::put('/tratamiento/{id}', [TratamioentosController::class, 'update']);
Route::delete('/tratamiento/{id}', [TratamioentosController::class, 'destroy']);

Route::get('/visitas', [VisitasController::class, 'index']);
Route::post('/visitas', [VisitasController::class, 'store']);
Route::put('/visitas/{id}', [VisitasController::class, 'update']);
Route::delete('/visitas/{id}', [VisitasController::class, 'destroy']);

// reportes

Route::get('/Reportes-pdf', [ReportesController::class, 'reporteCenPac']);


// reportes
Route::post('/generar-reporte', [ConsultasController::class, 'generarReporte']);

Route::get('ciudad-pdf', [ConsultasController::class, 'indexgrapciudadpdf']);
Route::post('generar-pdf', [ConsultasController::class, 'generar']);


Route::get('/post-tratamientos', [PosttratamientoController::class, 'index']);
Route::post('/post-tratamientos', [PosttratamientoController::class, 'store']);
Route::put('/post-tratamientos/{id}', [PosttratamientoController::class, 'update']);
Route::delete('/post-tratamientos/{id}', [PosttratamientoController::class, 'destroy']);
