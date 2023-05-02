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
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('enfermeras');
    }
}
