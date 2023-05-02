<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeguimientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seguimientos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_muestras')->constrained('muestras')->cascadeOnUpdate()->cascadeOnDelete();
            $table ->foreignId('id_resultados')->constrained('resultados')->cascadeOnDelete()->cascadeOnDelete();
            $table ->foreignId('id_doctores')->constrained('doctores')->cascadeOnDelete()->cascadeOnDelete();
            $table ->foreignId('id_centros')->constrained('centros')->cascadeOnDelete()->cascadeOnDelete();
            $table->date('fecha');
            $table ->string('observaciones');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seguimientos');
    }
}
