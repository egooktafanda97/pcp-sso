<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAppServices extends Model
{
    use HasFactory;
    // table
    protected $table = "user_app_services";
    // fillable
    protected $fillable = [
        "user_id",
        "user_id",
        "app_service_id",
        "props_id",
        "token",
        "refresh_token",
        "token_type",
        "expires_in",
        "status_act",
    ];


    // relation
    public function appService()
    {
        return $this->belongsTo(AppServices::class, "app_service_id", "id");
    }

    public function user()
    {
        return $this->belongsTo(User::class, "user_id", "id");
    }
}
