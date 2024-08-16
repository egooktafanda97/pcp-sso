<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;
    protected $table = "artikel";
    protected $fillable = [
        'user_id',
        'uuid',
        'lang',
        'title',
        'content',
        'thm',
        'is_type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
