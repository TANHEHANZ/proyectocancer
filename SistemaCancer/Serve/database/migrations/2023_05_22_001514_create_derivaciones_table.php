<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDerivacionesTable extends Migration
{
    
    public function up()
    {
        Schema::create('derivaciones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_pacientes')->constrained('pacientes')->cascadeOnUpdate()->cascadeOnDelete();
            $table ->foreignId('id_doctores')->constrained('doctores')->cascadeOnDelete()->cascadeOnDelete();
            $table ->foreignId('id_tratamientos')->constrained('tratamientos')->cascadeOnDelete()->cascadeOnDelete();
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_resultados')->constrained('resultados')->cascadeOnUpdate()->cascadeOnDelete(); 
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
         
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('derivaciones');
    }
}
