<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnfermerasTable extends Migration
{

    public function up()
    {
        Schema::create('enfermeras', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('ap_paterno');
            $table->string('ap_materno');
            $table->string('ci');
            $table->string('direccion');
            $table->string('experiencia');
            $table->string('correo');
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('enfermeras');
    }
}
