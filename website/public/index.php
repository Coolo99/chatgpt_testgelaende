<?php
require_once __DIR__ . '/../app/core/Router.php';
require_once __DIR__ . '/../app/core/BaseController.php';
require_once __DIR__ . '/../app/controllers/HomeController.php';

use App\Core\Router;
use App\Controllers\HomeController;

$router = new Router();
$router->add('/', function () {
    $controller = new HomeController();
    $controller->index();
});

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$router->dispatch($path);
