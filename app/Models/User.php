<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class User
 * @package App\Models
 * @version December 6, 2018, 8:52 am UTC
 *
 * @property string email
 * @property string password
 * @property string cipher
 * @property string checksum
 * @property string publicKey
 * @property string address
 */
class User extends Model
{
    use SoftDeletes;

    public $table = 'users';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        'email',
        'password',
        'cipher',
        'checksum',
        'publicKey',
        'address'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'email' => 'string',
        'password' => 'string',
        'cipher' => 'string',
        'checksum' => 'string',
        'publicKey' => 'string',
        'address' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'email' => 'required',
        'password' => 'required',
        'cipher' => 'required',
        'checksum' => 'required',
        'publicKey' => 'required',
        'address' => 'required'
    ];

    
}
