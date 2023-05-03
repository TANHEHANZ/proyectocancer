<?php
use App\Http\Controllers\CentrosController;
use App\Http\Controllers\CiudadesControllererrer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PacientesController;
use App\Http\Controllers\DoctoresController;
use App\Http\Controllers\EnfermeraContreoller;
use App\Http\Controllers\EspecialidadesController;
use App\Http\Controllers\LaboratorioController;
use App\Http\Controllers\MuestrasControllerer;
use App\Http\Controllers\MunicipiosController;
use App\Http\Controllers\ProvinciasControllererrer;
use App\Http\Controllers\ResultadosControllerer;
use App\Http\Controllers\SeguimientoControllerer;
use App\Http\Controllers\TiposcancersControllererrer;


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

Route::get('/pacientes', [PacientesController::class, 'index']);
Route::post('/pacientes', [PacientesController::class, 'store']);
Route::put('/pacientes/{id}', [PacientesController::class, 'update']);
Route::delete('/pacientes/{id}', [PacientesController::class, 'destroy']);

Route::get('/doctores', [DoctoresController::class, 'index']);
Route::post('/doctores', [DoctoresController::class, 'store']);
Route::put('/doctores/{id}', [DoctoresController::class, 'update']);
Route::delete('/doctores/{id}', [DoctoresController::class, 'destroy']);

Route::get('/especialidades', [EspecialidadesController::class, 'index']);
Route::post('/especialidades', [EspecialidadesController::class, 'store']);
Route::put('/especialidades/{id}', [EspecialidadesController::class, 'update']);
Route::delete('/especialidades/{id}', [EspecialidadesController::class, 'destroy']);

Route::get('/enfermera', [EnfermeraContreoller::class, 'index']);
Route::post('/enfermera', [EnfermeraContreoller::class, 'store']);
Route::put('/enfermera/{id}', [EnfermeraContreoller::class, 'update']);
Route::delete('/enfermera/{id}', [EnfermeraContreoller::class, 'destroy']);


Route::get('/laboratorio', [LaboratorioController::class, 'index']);
Route::post('/laboratorio', [LaboratorioController::class, 'store']);
Route::put('/laboratorio/{id}', [LaboratorioController::class, 'update']);
Route::delete('/laboratorio/{id}', [LaboratorioController::class, 'destroy']);

Route::get('/centros', [CentrosController::class, 'index']);
Route::post('/centros', [CentrosController::class, 'store']);
Route::put('/centros/{id}', [CentrosController::class, 'update']);
Route::delete('/centros/{id}', [CentrosController::class, 'destroy']);

Route::get('/municipios', [MunicipiosController::class, 'index']);
Route::post('/municipios', [MunicipiosController::class, 'store']);
Route::put('/municipios/{id}', [MunicipiosController::class, 'update']);
Route::delete('/municipios/{id}', [MunicipiosController::class, 'destroy']);

Route::get('/muestras', [MuestrasControllerer::class, 'index']);
Route::post('/muestras', [MuestrasControllerer::class, 'store']);
Route::put('/muestras/{id}', [MuestrasControllerer::class, 'update']);
Route::delete('/muestras/{id}', [MuestrasControllerer::class, 'destroy']);

Route::get('/resultados', [ResultadosControllerer::class, 'index']);
Route::post('/resultados', [ResultadosControllerer::class, 'store']);
Route::put('/resultados/{id}', [ResultadosControllerer::class, 'update']);
Route::delete('/resultados/{id}', [ResultadosControllerer::class, 'destroy']);

Route::get('/seguimiento', [SeguimientoControllerer::class, 'index']);
Route::post('/seguimiento', [SeguimientoControllerer::class, 'store']);
Route::put('/seguimiento/{id}', [SeguimientoControllerer::class, 'update']);
Route::delete('/seguimiento/{id}', [SeguimientoControllerer::class, 'destroy']);

Route::get('/ciudades', [CiudadesControllererrer::class, 'index']);
Route::post('/ciudades', [CiudadesControllererrer::class, 'store']);
Route::put('/ciudades/{id}', [CiudadesControllererrer::class, 'update']);
Route::delete('/ciudades/{id}', [CiudadesControllererrer::class, 'destroy']);

Route::get('/provincias', [ProvinciasControllererrer::class, 'index']);
Route::post('/provincias', [ProvinciasControllererrer::class, 'store']);
Route::put('/provincias/{id}', [ProvinciasControllererrer::class, 'update']);
Route::delete('/provincias/{id}', [ProvinciasControllererrer::class, 'destroy']);

Route::get('/tiposcancers', [TiposcancersControllererrer::class, 'index']);
Route::post('/tiposcancers', [TiposcancersControllererrer::class, 'store']);
Route::put('/tiposcancers/{id}', [TiposcancersControllererrer::class, 'update']);
Route::delete('/tiposcancers/{id}', [TiposcancersControllererrer::class, 'destroy']);
