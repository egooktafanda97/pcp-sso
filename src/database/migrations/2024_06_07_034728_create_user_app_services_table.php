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
        Schema::create('user_app_services', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("app_service_id");
            $table->string("token")->nullable();
            $table->integer("props_id")->nullable();
            $table->string("refresh_token")->nullable();
            $table->string("token_type")->nullable();
            $table->string("expires_in")->nullable();
            $table->boolean("status_act")->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_app_services');
    }
};
