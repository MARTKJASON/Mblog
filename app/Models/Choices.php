<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Choices extends Model
{
    use HasFactory;
    protected $fillable = [
        'question_id',
        'options',
        'user'
    ];

    public function choices()
    {
        return $this->belongsTo(Question::class);
    }
}
