<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMuestrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('muestras', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_pacientes')->constrained('pacientes')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_tiposcancers')->constrained('tiposcancers')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_enfermeras')->constrained('enfermeras')->cascadeOnUpdate()->cascadeOnDelete();
            $table->date('fecha');

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
        Schema::dropIfExists('muestras');
    }
}
