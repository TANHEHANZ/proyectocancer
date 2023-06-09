<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePacientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pacientes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('ap_paterno');
            $table->string('ap_materno');
            $table->string('sexo',10);
            $table->date('fecha_nacimiento');
            $table->string('telefono');
            $table->string('ci');
            $table->string('direccion');
            $table->string('correo');
            $table->integer('edad');
            $table->foreignId('id_doctores')->constrained('doctores')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_enfermeras')->constrained('enfermeras')->cascadeOnUpdate()->cascadeOnDelete();
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
        Schema::dropIfExists('pacientes');
    }
}
