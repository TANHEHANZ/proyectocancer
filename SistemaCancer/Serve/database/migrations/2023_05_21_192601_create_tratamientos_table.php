<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTratamientosTable extends Migration
{

    public function up()
    {
        Schema::create('tratamientos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_pacientes')->constrained('pacientes')->cascadeOnUpdate()->cascadeOnDelete();
            $table ->foreignId('id_doctores')->constrained('doctores')->cascadeOnDelete()->cascadeOnDelete();
            $table->date('fecha_inicio');
            $table->date('fecha_fin');


            // $table->foreignId('id_muestras')->constrained('muestras')->cascadeOnUpdate()->cascadeOnDelete();
            // $table ->foreignId('id_resultados')->constrained('resultados')->cascadeOnDelete()->cascadeOnDelete();
            // $table ->foreignId('id_centros')->constrained('centros')->cascadeOnDelete()->cascadeOnDelete();
            $table ->string('observaciones');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('tratamiento');
    }
}
