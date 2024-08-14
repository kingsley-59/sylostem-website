<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    use HasFactory;

    // Protect against mass assignment
    protected $fillable = [
        'fullname',
        'email',
        'phone',
        'subject',
        'message',
        'files',  // Add files to the fillable properties
    ];

    // Cast the files attribute to an array
    protected $casts = [
        'files' => 'array',
    ];
}
