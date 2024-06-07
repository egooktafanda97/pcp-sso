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
        Schema::create('app_services', function (Blueprint $table) {
            $table->increments("id");
            $table->string("name");
            $table->string("description");
            $table->string("url");
            $table->string("url_auth");
            $table->string("token");
            $table->string("code")->nullable();
            $table->string("permission_name");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('app_services');
    }
};
