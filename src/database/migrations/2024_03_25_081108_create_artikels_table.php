<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('artikel', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->unsignedBigInteger("user_id"); // Menggunakan unsignedBigInteger untuk foreign key
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); // Menambahkan foreign key
            $table->string("lang", 10)->default("ID");
            $table->string("title", 200);
            $table->longText("content");
            $table->string("thm", 200)->nullable()->default("default.jpg");
            $table->string("is_type", 20)->default("news");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('artikel');
    }
};
