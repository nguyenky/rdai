<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CoinMarketCap extends Controller
{
    public function coinMarketCap(){
    	$client = new \GuzzleHttp\Client();
    }
}
