<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultadosTable extends Migration
{
 
    public function up()
    {
        Schema::create('resultados', function (Blueprint $table) {
            $table->id();
            $table->string('resultados');
            $table->foreignId('id_pacientes')->constrained('pacientes')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_tiposcancers')->constrained('tiposcancers')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_muestras')->constrained('muestras')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_laboratorios')->constrained('laboratorios')->cascadeOnUpdate()->cascadeOnDelete();
            $table->date('fecha');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('resultados');
    }
}
