<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamenTable extends Migration
{
 
    public function up()
    {
        Schema::create('examens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_pacientes')->constrained('pacientes')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_tipoexamens')->constrained('tipoexamens')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('descripcion');
            $table->date('fecha');
            $table->string('resultado');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('examens');
    }
}
