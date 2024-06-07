<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppServices extends Model
{
    use HasFactory;
    // table
    protected $table = "app_services";
    // fillable
    protected $fillable = [
        "name",
        "description",
        "url",
        "url_auth",
        "code",
        "permission_name"
    ];
}
