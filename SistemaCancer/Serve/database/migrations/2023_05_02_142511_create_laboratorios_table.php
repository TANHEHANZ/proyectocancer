<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLaboratoriosTable extends Migration
{

    public function up()
    {
        Schema::create('laboratorios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('ubicacion');
            $table->string('contacto');
            $table->string('email');
            $table->foreignId('id_doctores')->constrained('doctores')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('laboratorios');
    }
}
