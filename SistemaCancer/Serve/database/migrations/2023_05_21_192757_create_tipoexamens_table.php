<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoexamensTable extends Migration
{

    public function up()
    {
        Schema::create('tipoexamens', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tipoexamens');
    }
}
