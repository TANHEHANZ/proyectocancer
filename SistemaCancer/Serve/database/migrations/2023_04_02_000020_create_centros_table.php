<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCentrosTable extends Migration
{
    public function up()
    {
        Schema::create('centros', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('ubicacion');
            // $table->foreignId('id_municipios')->constrained('municipios')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('centros');
    }
}
