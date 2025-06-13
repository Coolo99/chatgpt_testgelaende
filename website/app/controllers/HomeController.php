<?php
namespace App\Controllers;

use App\Core\BaseController;

class HomeController extends BaseController
{
    public function index()
    {
        $time = date('Y-m-d H:i:s');
        include __DIR__ . '/../views/home/index.php';
    }
}
