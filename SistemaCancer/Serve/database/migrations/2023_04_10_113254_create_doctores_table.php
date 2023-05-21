<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateDoctoresTable extends Migration
{
    public function up()
    {
        Schema::create('doctores', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('ap_paterno');
            $table->string('ap_materno');
            $table->string('ci');
            $table->string('correo');
            $table->string('Direccion');
            $table->string('Credenciales');
            $table->string('descripcion');
            $table->foreignId('id_especialidades')->constrained('especialidades')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('doctores');
    }
}
