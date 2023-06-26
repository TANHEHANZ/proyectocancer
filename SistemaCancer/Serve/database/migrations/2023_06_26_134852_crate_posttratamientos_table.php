<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CratePosttratamientosTable extends Migration
{
    public function up()
    {
        Schema::create('posttratamientos', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descripcion');
            $table->string('contenido');
            $table->date('fecha_publicar');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('posttratamientos');
    }
}
